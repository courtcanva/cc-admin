import { useRouter } from "next/router";
import { api } from "@/utils/axios";
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
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

const AddNewAdmin = () => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={({ name, email, password }, actions) => {
        api(process.env.NEXT_PUBLIC_API_ADMIN as string, {
          method: "register",
          requestData: { email, password },
        });
        actions.setSubmitting(false);
        router.push("admin");
      }}
    >
      {(props) => (
        <Container>
          <Text fontSize="4xl">Add a new admin</Text>
          <Form>
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Admin Name</FormLabel>
                  <Input {...field} id="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor="email">Admin Email</FormLabel>
                  <Input {...field} id="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
