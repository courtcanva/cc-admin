import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
interface ITile {
  _id: string;
  name: string;
  colors: { name: string; value: string }[];
  length: string;
  width: string;
  height: string;
  createAt: string;
  updateAt: string;
}
interface IColor {
  name: string;
  value: string;
}

const TileSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  height: Yup.number().integer().positive().min(1).required("Required"),
  length: Yup.number().integer().positive().min(1).required("Required"),
  width: Yup.number().integer().positive().min(1).required("Required"),
});

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tile, setTile] = useState<ITile>();
  const [loading, setLoading] = useState(true);
  const validateColorName = (name: string) => {
    let error;
    if (!name) {
      error = "Color Name is required";
    }
    return error;
  };
  const validateColorValue = (value: string) => {
    let error;
    if (!value) {
      error = `Value is required`;
    } else if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(value)) {
      error = "Value must hex color codes";
    }
    return error;
  };

  const apiUrl = `${process.env.NEXT_PUBLIC_API_TILES}/${id}`;
  useEffect(() => {
    try {
      api(apiUrl, { method: "get" }).then(({ data }) => {
        setTile(data);
        setLoading(false);
      });
    } catch {}
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <Formik
      initialValues={{
        name: tile!.name,
        length: tile!.length,
        width: tile!.width,
        height: tile!.height,
        colors: tile!.colors,
      }}
      validationSchema={TileSchema}
      onSubmit={({ name, length, width, height, colors }, actions) => {
        api(apiUrl, {
          method: "put",
          requestData: { ...tile, colors, length, width, name },
        });
        actions.setSubmitting(false);
        router.push("/tiles");
      }}
    >
      {(props) => (
        <Container>
          <Text fontSize="4xl">Update a new tile</Text>
          <Form>
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Tile Name</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="length">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.length && form.touched.length}>
                  <FormLabel htmlFor="length">Tile Length (mm)</FormLabel>
                  <Input {...field} type="number" id="length" placeholder="length" />
                  <FormErrorMessage>{form.errors.length}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="width">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.width && form.touched.width}>
                  <FormLabel htmlFor="width">Tile Width (mm)</FormLabel>
                  <Input {...field} type="number" id="width" placeholder="width" />
                  <FormErrorMessage>{form.errors.width}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="height">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.height && form.touched.height}>
                  <FormLabel htmlFor="height">Tile Height (mm)</FormLabel>
                  <Input {...field} type="number" id="height" placeholder="height" />
                  <FormErrorMessage>{form.errors.height}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <FormLabel htmlFor="colors">Tile Color</FormLabel>
            <FieldArray name="colors">
              {({ remove, push }) => (
                <Box>
                  {props.values.colors.length > 0 &&
                    props.values.colors.map((color, index: number) => (
                      <Flex key={index} justifyContent="space-between">
                        <Field name={`colors[${index}].name`} validate={validateColorName}>
                          {({ field, form }: any) => (
                            <FormControl
                              marginRight={4}
                              marginBottom={4}
                              isInvalid={
                                form.errors[`colors[${index}].name`] &&
                                form.touched[`colors[${index}].name`]
                              }
                            >
                              <Input
                                {...field}
                                id={`colors[${index}].name`}
                                placeholder="Color Name"
                              />
                              <Text color="#E53E3E">
                                <ErrorMessage name={`colors[${index}].name`} />
                              </Text>
                            </FormControl>
                          )}
                        </Field>
                        <Field name={`colors[${index}].value`} validate={validateColorValue}>
                          {({ field, form }: any) => (
                            <FormControl
                              marginRight={4}
                              marginBottom={4}
                              isInvalid={
                                form.errors[`colors[${index}].value`] &&
                                form.touched[`colors[${index}].value`]
                              }
                            >
                              <Input
                                {...field}
                                id={`colors[${index}].value`}
                                placeholder="Color Value"
                              />
                              <Text color="#E53E3E">
                                <ErrorMessage name={`colors[${index}].value`} />
                              </Text>
                            </FormControl>
                          )}
                        </Field>
                        <Box
                          width="38px"
                          height="38px"
                          padding="20px"
                          background={color.value}
                          borderRadius="10px"
                          marginRight={4}
                        ></Box>

                        <Button type="button" className="secondary" onClick={() => remove(index)}>
                          X
                        </Button>
                      </Flex>
                    ))}
                  <Button
                    type="button"
                    className="secondary"
                    onClick={() => push({ name: "", value: "" })}
                  >
                    Add color
                  </Button>
                </Box>
              )}
            </FieldArray>
            <Flex justifyContent="center">
              <Link href="/tiles">
                <Button margin={4}>Cancel</Button>
              </Link>
              <Button margin={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                Submit
              </Button>
            </Flex>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
export default Edit;
