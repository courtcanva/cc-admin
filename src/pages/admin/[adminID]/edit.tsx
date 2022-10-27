import AdminForm from "@/components/AdminForm";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useGetAdminByIdQuery } from "@/redux/api/adminApi";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { IAdmin } from "@/interfaces/adminData";

const EditAdmin = () => {
  const router = useRouter();
  const adminId = router.query.adminID as string;
  const { data: adminData, isError, isLoading } = useGetAdminByIdQuery(adminId ?? skipToken);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) return null;

  return <AdminForm header="Edit Admin Information" adminData={adminData as IAdmin} />;
};

export default EditAdmin;
