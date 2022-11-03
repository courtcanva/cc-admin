import * as Yup from "yup";
const updateAdminSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, "Name should contain at least 3 character")
  .max(20, "Name should be no more than 20 characters")
  .required("Required"),
  permission: Yup.string().required("Required"),
});

export default updateAdminSchema;
