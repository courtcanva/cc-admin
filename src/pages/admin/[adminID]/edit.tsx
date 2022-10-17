import AdminForm from "@/components/AdminForm";
import { api } from "@/utils/axios";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IAdmin } from "../../../interfaces/adminData";

const EditAdmin = () => {
  const router = useRouter();
  const adminId = router.query.adminID;
  const [defaultAdmintData, setDefaultAdminData] = useState<IAdmin>();
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl = `admin/${adminId}`;

  useEffect(() => {
    api(apiUrl, { method: "get" }).then(({ data }) => {
      const {
        email,
        // password,
        name,
        permission,
        isDeleted,
      } = data;
      const editableData = {
        email,
        // password,
        name,
        permission,
        isDeleted,
      } as IAdmin;
      setDefaultAdminData(editableData);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (!defaultAdmintData) return;
  return (
    <AdminForm
      header="Edit Admin Information"
      adminData={defaultAdmintData}
      API={apiUrl}
      method="patch"
    />
  );
};

export default EditAdmin;
