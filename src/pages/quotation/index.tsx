import { createColumnHelper } from "@tanstack/react-table";
import { useGetAllQuotationQuery } from "@/redux/api/quotationApi";
import DisplayDataTable from "@/components/DisplayDataTable";
import { IQuotation, IQuotationDetail } from "@/interfaces/quotation";
import _ from "lodash";
import { LIMIT } from "@/constants/pagination";
import { IPagination } from "@/interfaces/pagination";
import { useCallback, useEffect, useRef, useState } from "react";
import { Test } from "@/components/DisplayDataTable/test";

interface Quotation {
  user_id: string;
  quotationName: string;
  quotation: string;
  quotationDetails: IQuotationDetail[];
  isExpired: boolean;
}

const quotation = () => {
  const [pageCount, setPageCount] = useState(0);
  const [data, setData] = useState<Quotation[]>();
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: LIMIT[0],
  });

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    console.log("------sx-----");
    const { data, isLoading } = useGetAllQuotationQuery({
      offset: pageIndex * pageSize,
      limit: pageSize,
    });
    console.log("-----------");
    console.log(data);
    let quotationData = [];
    if (!isLoading) {
      quotationData = data?.map((item) => {
        return {
          ..._.omit(item, ["_id", "image", "design", "isDeleted", "createdAt", "updatedAt", "__v"]),
          quotationName: item.design.designName,
        };
      });
    }
    setData(quotationData);
  }, [pageIndex]);

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

  // const a = useGetAllQuotationQuery({ offset: 0, limit: LIMIT[0] });
  // let quotationData = [];
  // if (!a.isLoading) {
  //   quotationData = a.data?.map((item) => {
  //     return {
  //       ..._.omit(item, ["_id", "image", "design", "isDeleted", "createdAt", "updatedAt", "__v"]),
  //       quotationName: item.design.designName,
  //     };
  //   });
  // }

  // const fetchData = ({ offset, limit }: IPagination) => {
  //   const { data, isLoading } = useGetAllQuotationQuery({ offset, limit });
  //   console.log(data);
  //   let quotationData = [];
  //   if (!isLoading) {
  //     quotationData = data?.map((item) => {
  //       return {
  //         ..._.omit(item, ["_id", "image", "design", "isDeleted", "createdAt", "updatedAt", "__v"]),
  //         quotationName: item.design.designName,
  //       };
  //     });
  //   }
  //   return quotation;
  // };

  return (
    <Test></Test>
    // <DisplayDataTable
    //   tableTitle="Quotation"
    //   columns={columns}
    //   // data={quotationData as Quotation[]}
    //   data={data}
    //   fetchData={fetchData}
    //   pageIndex={pageIndex}
    //   pageSize={pageSize}
    // ></DisplayDataTable>
  );
};

export default quotation;
