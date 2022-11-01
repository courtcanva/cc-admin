import * as Yup from "yup";
const updateAdminSchema = Yup.object().shape({
  name: Yup.string().min(1, "Too Short!").max(20, "Too Long!").required("Required"),
  permission: Yup.string().required("Required"),
});

export default updateAdminSchema;