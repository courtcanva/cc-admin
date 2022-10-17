import { routeHandler } from "@/utils/routeHandler";
import { Button, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { IAdmin } from "../../interfaces/adminData";
import { headerCellGenerator } from "@/utils/headerCellGenerator";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import AdminSchema from "./AdminSchema";
import useValidator from "./hooks/useValidator";

type Props = {
  header: string;
  adminData: IAdmin;
  API: string;
  method: string;
};

const AdminForm: React.FC<Props> = ({ header, adminData, API, method }) => {
  const validator = useValidator({ API, method });
  return (
    <Formik
      initialValues={{ ...adminData }}
      validationSchema={AdminSchema}
      onSubmit={(values, actions) => validator(values, actions)}
    >
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
            onClick={() => routeHandler("admin")}
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
          {Object.entries(adminData).map(([key]) => {
            const headerCellContent = headerCellGenerator(key);
            // const inputType = key === "name" || key === "description" ? "string" : "number";
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
          })}
        </Flex>
      </Form>
    </Formik>
  );
};
export default AdminForm;
