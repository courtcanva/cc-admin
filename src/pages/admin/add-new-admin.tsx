import { useRouter } from "next/router";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Container,
  FormErrorMessage,
  Text,
  Select,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useCreateAdminMutation } from "@/redux/api/adminApi";
import AdminSchema from "@/components/Admin/AdminForm/AdminSchema";
import { routeHandler } from "@/utils/routeHandler";

const AddNewAdmin = () => {
  const router = useRouter();
  const [createAdmin] = useCreateAdminMutation();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        permission: "",
      }}
      validationSchema={AdminSchema}
      onSubmit={async ({ name, email, password, permission }, actions) => {
        await createAdmin({ name, email, password, permission })
          .unwrap()
          .catch((_err) => {
            alert("Whoops! Account of this email cannot be created, please try again!");
          });
        actions.setSubmitting(false);
        router.push("/admin");
      }}
    >
      {(props) => (
        <Container>
          <Flex flexDirection="column">
            <Text fontSize="4xl" marginY="50px">
              Add a new admin
            </Text>
            <Form>
              <Field name="email">
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel htmlFor="email">Admin Email</FormLabel>
                    <Input {...field} id="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="name">
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor="name">Admin Name</FormLabel>
                    <Input {...field} id="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor="password">Admin password</FormLabel>
                    <Input {...field} id="password" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
            </Form>
          </Flex>
        </Container>
      )}
    </Formik>
  );
};
export default AddNewAdmin;
