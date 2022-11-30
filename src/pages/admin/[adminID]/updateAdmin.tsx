import AdminForm from "@/components/Admin/AdminForm/AdminForm";
import { Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useGetAdminByIdQuery } from "@/redux/api/adminApi";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { IAdmin } from "@/interfaces/adminData";
import { useEffect } from "react";

const EditAdmin = () => {
  const router = useRouter();
  const adminId = router.query.adminID as string;
  const toast = useToast();
  const { data: adminData, isError, isLoading, error } = useGetAdminByIdQuery(adminId ?? skipToken);
  useEffect(() => {
    if (isError && error && "data" in error)
      toast({
        title: `Can not get data, ${error.status}`,
        description: "Try again or contact IT support",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
  }, [isError, error]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) return null;

  return <AdminForm header="Edit Admin Information" adminData={adminData as IAdmin} />;
};

export default EditAdmin;
