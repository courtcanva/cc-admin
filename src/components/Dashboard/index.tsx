import { useGetDashboardDataQuery } from "../../redux/api/dashboardApi";
import formatCurrency from "@/utils/formatCurrency";
import TotalDataCard from "./TotalDataCard";
import CourtCategorySold from "./CourtCategorySold";
import TodayTrend from "./TodayTrend";
import RecentOrder from "./RecentOrder";
import SalesAndOrderVolume from "./SalesAndOrderVolume";
import Loading from "../Loading";
import Error from "../Error";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgTemplate, CgNotes } from "react-icons/cg";
import { Center, Grid, GridItem } from "@chakra-ui/react";

const Dashboard = () => {
  const { data, isLoading, isError, isSuccess } = useGetDashboardDataQuery();

  return (
    <>
      {isLoading && (
        <Center height="80vh">
          <Loading loadingText="Please wait while the data is loading..."></Loading>
        </Center>
      )}
      {isError && (
        <Center height="80vh">
          <Error
            errorTitle="Sorry, failed to get data"
            errorDescription="Your request was not sent successfully, please try again or contact IT support."
          ></Error>
        </Center>
      )}
      {isSuccess && (
        <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(3, 33.33%)" gap="20px">
          <TotalDataCard
            icon={HiOutlineShoppingCart}
            background="linear-gradient(98.86deg, #6BAAFC 0%, #305FEC 100%)"
            totalCardItems={[
              {
                title: "Total Sales",
                value: formatCurrency(data.totalSales),
              },
              { title: "Courts Sold", value: data.totalItemsSold },
            ]}
          ></TotalDataCard>
          <TotalDataCard
            icon={CgTemplate}
            background="linear-gradient(98.86deg, #EF5E7A 0%, #D35385 100%)"
            totalCardItems={[
              {
                title: "Total Templates",
                value: data.totalTemplates,
              },
              { title: "Published", value: data.totalPublishedTemplates },
            ]}
          ></TotalDataCard>
          <TotalDataCard
            icon={CgNotes}
            background="linear-gradient(98.86deg, #D623FE 0%, #A530F2 100%)"
            totalCardItems={[
              {
                title: "Orders",
                value: data.totalOrders,
              },
              { title: "Pending", value: data.totalUnpaidOrders },
              { title: "Completed", value: data.totalPaidOrders },
            ]}
          ></TotalDataCard>
          <GridItem rowSpan={2}>
            <CourtCategorySold
              courtCategorySoldCountList={data.courtCategorySoldCountList}
            ></CourtCategorySold>
          </GridItem>
          <GridItem rowSpan={2}>
            <TodayTrend
              todayTotalOrder={data.todayTotalOrder}
              orderGrowth={data.orderGrowth}
              todayTotalSales={data.todayTotalSales}
              saleGrowth={data.saleGrowth}
              todayAddedUsers={data.todayAddedUsers}
              userGrowth={data.userGrowth}
              todayAddedTemplates={data.todayAddedTemplates}
              templatesGrowth={data.templatesGrowth}
            ></TodayTrend>
          </GridItem>
          <GridItem rowSpan={4}>
            <RecentOrder recentOrders={data.recentOrders}></RecentOrder>
          </GridItem>
          <GridItem rowSpan={2} colSpan={2}>
            {
              <SalesAndOrderVolume
                lastSevenDaysTotalOrderAndSales={data.lastSevenDaysTotalOrderAndSales}
              ></SalesAndOrderVolume>
            }
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default Dashboard;
