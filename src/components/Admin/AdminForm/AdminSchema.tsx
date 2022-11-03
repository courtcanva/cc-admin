import * as Yup from "yup";
const AdminSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should contain at least 3 character")
    .max(20, "Name should be no more than 20 characters")
    .required("Required"),
  email: Yup.string().email().max(50, "please input a valid email").required("Required"),
  permission: Yup.string().required("Required"),
  password: Yup.string()
    .min(5, "Password should contain at least 5 characters")
    .max(50, "Password should be no more than 50 characters")
    .required("Required"),
});

export default AdminSchema;
