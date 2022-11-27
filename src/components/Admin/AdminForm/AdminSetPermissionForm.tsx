import { routeHandler } from "@/utils/routeHandler";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Container,
  FormErrorMessage,
  Select,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { IAdmin } from "../../../interfaces/adminData";
import updateAdminPermissionSchema from "./updateAdminPermissionSchema";
import { useUpdateAdminMutation } from "@/redux/api/adminApi";
import { useSetAdminPermissionMutation } from "@/redux/api/adminApi";

type Props = {
  header: string;
  adminData: IAdmin;
};

const AdminSetPermissionForm: React.FC<Props> = ({ header, adminData }) => {
  const [updateAdminPermission] = useSetAdminPermissionMutation();
  const displayAdminData = {
    email: adminData.email,
    name: adminData.name,
    permission: adminData.permission,
  };

  return (
    <Formik
      initialValues={{ ...displayAdminData }}
      validationSchema={updateAdminPermissionSchema}
      onSubmit={async (values, actions) => {
        await updateAdminPermission({ ...adminData, ...values })
          .unwrap()
          .catch((_err) => {
            alert("Whoops! This account cannot be updated, please try again!");
          });
        actions.setSubmitting(false);
        routeHandler("admin");
      }}
    >
      {(props) => (
        <Container>
          <Flex flexDirection="column">
            <Text fontSize="4xl" marginY="50px">
              {header}
            </Text>
            <Form>
              <Flex
                maxWidth="1100px"
                flexDirection="row"
                flexWrap="wrap"
                gap="30px"
                alignSelf="center"
              >
                <Field name="email">
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor="email">Admin Email</FormLabel>
                      <Input {...field} id="email" disabled />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="name">
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input {...field} id="name" disabled />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="permission">
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.permission && form.touched.permission}>
                      <FormLabel htmlFor="permission">Permission</FormLabel>
                      <Select {...field} id="permission" placeholder="Select option">
                        <option value="super">Super</option>
                        <option value="normal">Normal</option>
                      </Select>
                      <FormErrorMessage>{form.errors.permission}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Flex justifyContent="center">
                  <Button margin={4} onClick={() => routeHandler("admin")}>
                    Cancel
                  </Button>
                  <Button margin={4} isLoading={props.isSubmitting} type="submit">
                    Submit
                  </Button>
                </Flex>
              </Flex>
            </Form>
          </Flex>
        </Container>
      )}
    </Formik>
  );
};
export default AdminSetPermissionForm;
