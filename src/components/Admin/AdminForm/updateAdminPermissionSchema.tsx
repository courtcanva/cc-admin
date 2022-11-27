import * as Yup from "yup";
const updateAdminPermissionSchema = Yup.object().shape({
  permission: Yup.string().required("Required"),
});

export default updateAdminPermissionSchema;
