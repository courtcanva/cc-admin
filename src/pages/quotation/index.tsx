import { createColumnHelper } from "@tanstack/react-table";
import { useGetAllQuotationQuery } from "@/redux/api/quotationApi";
import DisplayDataTable from "@/components/DisplayDataTable";
import { IQuotation, IQuotationDetail } from "@/interfaces/quotation";
import _ from "lodash";
import { LIMIT } from "@/constants/pagination";
import { IPagination } from "@/interfaces/pagination";
import { useState } from "react";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { Center } from "@chakra-ui/react";

interface Quotation {
  user_id: string;
  quotationName: string;
  quotation: string;
  quotationDetails: IQuotationDetail[];
  isExpired: boolean;
}

const quotation = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: LIMIT[0],
  });
  const [searchTerm, setSearchTerm] = useState("");

  const _handleSearch = _.debounce(
    (search) => {
      setSearchTerm(search);
    },
    1500,
    {
      maxWait: 1500,
    }
  );

  const columnHelper = createColumnHelper<Quotation>();

  const columns = [
    columnHelper.accessor("user_id", {
      header: "ACCOUNT ID",
    }),
    columnHelper.accessor("quotationName", {
      header: "QUOTATION Name",
    }),
    columnHelper.accessor("quotation", {
      header: "QUOTATION",
    }),
    columnHelper.accessor("quotationDetails", {
      header: "QUOTATION DETAIL",
    }),
    columnHelper.accessor("isExpired", {
      header: "QUOTATION STATUS",
    }),
  ];

  const { data, isLoading, isError } = useGetAllQuotationQuery({
    offset: pageIndex * pageSize,
    limit: pageSize,
  });

  // if (!isLoading) {
  const quotationData = data?.data.map((item) => {
    return {
      ..._.omit(item, ["_id", "image", "design", "isDeleted", "createdAt", "updatedAt", "__v"]),
      quotationName: item.design.designName,
    };
  });

  return (
    <Center height="100vh">
      {isLoading && <Loading loadingText="Please wait while the quotation is loading..."></Loading>}
      {isError && (
        <Error
          errorTitle="Sorry, something wrong"
          errorDescription="Your request was not sent successfully, please try again or contact IT support."
        ></Error>
      )}
      <DisplayDataTable
        tableTitle="Quotation"
        columns={columns}
        data={quotationData as Quotation[]}
        setPagination={setPagination}
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={data?.total ? Math.ceil(data?.total / pageSize) : 1}
      ></DisplayDataTable>
    </Center>
  );
};

export default quotation;
