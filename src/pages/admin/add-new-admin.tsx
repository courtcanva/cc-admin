import { useRouter } from "next/router";
import Link from "next/link";
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
import AdminSchema from "@/components/AdminForm/AdminSchema";

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
      onSubmit={({ name, email, password, permission }, actions) => {
        createAdmin({ name, email, password, permission });
        actions.setSubmitting(false);
        router.push("/admin");
      }}
    >
      {(props) => (
        <Container>
          <Text fontSize="4xl">Add a new admin</Text>
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
              <Link href="/admin" passHref>
                <Button margin={4}>Cancel</Button>
              </Link>
              <Button margin={4} isLoading={props.isSubmitting} type="submit">
                Submit
              </Button>
            </Flex>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
export default AddNewAdmin;
