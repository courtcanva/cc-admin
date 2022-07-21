import { routeHandler } from "@/utils/routeHandler";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { api } from "../../utils/axios";
import { ICourt } from "../../interfaces/courtData";
import { headerCellGenerator } from "@/utils/headerCellGenerator";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import * as Yup from "yup";
type Props = {
  header: string;
  courtData: ICourt;
  API: string;
  method: string;
};

const CourtSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required"),
  length: Yup.number().integer().positive().min(1).required("Required"),
  width: Yup.number().integer().positive().min(1).required("Required"),
  centreCircleRadius: Yup.number().integer().positive().min(1).required("Required"),
  lengthOfCorner: Yup.number().integer().positive().min(1).required("Required"),
  lineBorderWidth: Yup.number().integer().positive().min(1).required("Required"),
  restrictedAreaLength: Yup.number().integer().positive().min(1).required("Required"),
  restrictedAreaWidth: Yup.number().integer().positive().min(1).required("Required"),
  sideBorderWidth: Yup.number().integer().positive().min(1).required("Required"),
  threePointLine: Yup.number().integer().positive().min(1).required("Required"),
  threePointRadius: Yup.number().integer().positive().min(1).required("Required"),
  description: Yup.string(),
});

const CourtForm: React.FC<Props> = ({ header, courtData, API, method }) => {
  const toast = useToast();
  return (
    <Formik
      initialValues={{ ...courtData }}
      validationSchema={CourtSchema}
      onSubmit={async (values, actions) => {
        try {
          const response = await api(API as string, {
            method: method,
            requestData: values,
          });
          if (response.status >= 300 || response.status < 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          actions.setSubmitting(false);
          routeHandler("courts");
        } catch (error) {
          toast({
            title: `Can not get data, ${error}`,
            description: "Try again or contact IT support",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="row" flexWrap="wrap" gap="30px" justifyContent="space-between">
            <Button
              marginTop="100px"
              width="250px"
              backgroundColor="transparent"
              border="2px"
              borderColor="#f05544"
              _hover={{ bg: "#e94d3c", color: "#fff" }}
              leftIcon={<ChevronLeftIcon />}
              onClick={() => routeHandler("courts")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              marginTop="100px"
              width="250px"
              backgroundColor="transparent"
              border="2px"
              borderColor="#40B484"
              _hover={{ bg: "#40B484", color: "#fff" }}
            >
              Save
            </Button>
          </Flex>
          <Heading marginY="70px" alignSelf="center">
            {header}
          </Heading>
          <Flex maxWidth="1100px" flexDirection="row" flexWrap="wrap" gap="30px" alignSelf="center">
            {Object.entries(courtData).map(([key, value]) => {
              const headerCellContent = headerCellGenerator(key);
              if (key === "name" || key === "description") {
                return (
                  <Field name={key} key={key}>
                    {({ field, form }: any) => (
                      <FormControl width="250px" isInvalid={form.errors.key && form.touched.key}>
                        <FormLabel htmlFor="key">{headerCellContent}</FormLabel>
                        <Input {...field} id={key} />
                        <Text color="#E53E3E">
                          <ErrorMessage name={key} />
                        </Text>
                      </FormControl>
                    )}
                  </Field>
                );
              } else {
                return (
                  <Field name={key} key={key}>
                    {({ field, form }: any) => (
                      <FormControl width="250px" isInvalid={form.errors.key && form.touched.key}>
                        <FormLabel htmlFor="key">{headerCellContent}</FormLabel>
                        <Input {...field} type="number" id={key} />
                        <Text color="#E53E3E">
                          <ErrorMessage name={key} />
                        </Text>
                      </FormControl>
                    )}
                  </Field>
                );
              }
            })}
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
export default CourtForm;
