import { api } from "@/utils/axios";
import { routeHandler } from "@/utils/routeHandler";
import { useToast } from "@chakra-ui/react";

type Props = {
  API: string;
  method: string;
};
function useValidator({ API, method }: Props) {
  const toast = useToast();
  const validator = async (values: any, actions: any) => {
    try {
      const response = await api(API as string, {
        method: method,
        requestData: values,
      });
      if (response.status >= 300 || response.status < 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      actions.setSubmitting(false);
      routeHandler("admin");
    } catch (error) {
      toast({
        title: `Can not get data, ${error}`,
        description: "Try again or contact IT support",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return validator;
}
export default useValidator;
