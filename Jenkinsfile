pipeline {
    agent any
    environment {
         AWS_ACCESS_KEY = credentials('aws-creds-sl')
         GIT_HASH = GIT_COMMIT.take(7)
         Version_ID = "$BUILD_NUMBER" + '-' + "$GIT_HASH" + '-' + "$BUILD_TIMESTAMP"
    }
    stages {
        stage('Install dependencies') {
                        steps {
                             sh 'npm i'
                   echo 'Building..'
                             echo "Running job: ${env.JOB_NAME}\n Build: ${env.BUILD_ID} - ${env.BUILD_URL}\nPepeline: ${env.RUN_DISPLAY_URL}"
                        }
         }
        stage('Build') {
              steps {
                   sh '. /var/jenkins_home/adminuat.env; npm run build'
              }
                   }
        stage('Export') {
              steps {
                   sh 'npm run export'
              }
                   }
        stage('Version Number') {
              steps {
                   echo "1.0.$Version_ID"
              }
                   }
        stage('Upload Main Branch Artifact Repo') {
              when {
                   branch 'main'
              }
              steps {
                   echo 'Zip Artifact File'
                   sh 'cd out; zip -r ../"1.0.$Version_ID".zip .'
                   echo 'Upload main branch artifact to UAT Admin artifact repo'
                   sh 'aws s3 cp "1.0.$Version_ID".zip ${UATAdminRepo}'
              }
                   }
        stage('Main Branch Deploy') {
              when {
                   branch 'main'
              }
              steps {
                   echo 'Deploying artifact to UAT Admin from main branch'
                   sh 'aws s3 sync out ${UATAdminS3Bucket}'
              }
         }
         stage('Approval') {
             agent {
              label "agent1"
            }
            when {
                 branch 'main'
            }
            
         steps {
             script {
                 mail to: "${Recepient}",
                 subject: "Courtcanva-Admin-Front-End-Prod-Deployment",
                 body: "Do you want to deploy artificat 1.0.${env.Version_ID} to prod?"
                 env.PROCEED_TO_DEPLOY = 1
                 try {
                     timeout(time: 2, unit: 'HOURS') {
                         input(message: 'Deploy this build to Prod?')
                     }
                 } 
                 catch (err) {
                    env.PROCEED_TO_DEPLOY = 0
                 }
             }
         }
     }
         stage('Build-Prod') {
              when {
                 branch 'main'
            }
              steps {
                   sh '. /var/jenkins_home/adminprod.env; npm run build'
              }
                   }
         
        stage('Export-Prod') {
             when {
                 branch 'main'
            }
              steps {
                   sh 'npm run export'
              }
                   }
      
         stage('Upload Main Branch Artifact Repo to Prod') {
            when {
                 branch 'main'
            }
              steps {
                   echo 'Zip Artifact File'
                   sh 'cd out; zip -r ../"1.0.$Version_ID".zip .'
                   echo 'Upload main branch artifact to Prod Admin artifact repo'
                   sh 'aws s3 cp "1.0.$Version_ID".zip ${ProdAdminRepo}'
              }
                   }
         stage ('Deploy To Prod') {
             when {
                  expression {
                  env.PROCEED_TO_DEPLOY == '1'
              }
              }
              steps {
                   echo 'Deploying artifact to PROD Admin from main branch'
                   sh 'aws s3 sync out ${ProdAdminS3Bucket}'
              }
         }
    }
    post {
         always {
              cleanWs()
             
         }
    }
}
