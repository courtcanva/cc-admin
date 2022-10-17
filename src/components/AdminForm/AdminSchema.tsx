import * as Yup from "yup";
const AdminSchema = Yup.object().shape({
  name: Yup.string().min(1, "Too Short!").max(20, "Too Long!").required("Required"),
  email: Yup.string().email().max(50, "please input a valid email").required("Required"),
  // password:Yup.string().min(5,"Too Short!").max(50,"Too Long!").required("Required"),
  isDeleted: Yup.boolean(),
  permission: Yup.string().required("Required"),
});

export default AdminSchema;
