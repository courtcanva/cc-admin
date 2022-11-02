import * as Yup from "yup";
const updateAdminSchema = Yup.object().shape({
  permission: Yup.string().required("Required"),
});

export default updateAdminSchema;
