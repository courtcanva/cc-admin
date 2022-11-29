import { IOrder } from "./orderData";

export interface IAdminDashboardData {
  totalSales: number;
  totalItemsSold: number;
  totalTemplates: number;
  totalPublishedTemplates: number;
  totalOrders: number;
  totalUnpaidOrders: number;
  totalPaidOrders: number;
  courtCategorySoldCountList: CourtCategorySoldCount[];
  todayTotalOrder: number;
  orderGrowth: number;
  todayTotalSales: number;
  saleGrowth: number;
  todayAddedUsers: number;
  userGrowth: number;
  todayAddedTemplates: number;
  templatesGrowth: number;
  recentOrders: IOrder[];
  lastSevenDaysTotalOrderAndSales: dailyTotalOrderAndSales[];
}

export interface CourtCategorySoldCount {
  _id: string;
  count: number;
}

export interface dailyTotalOrderAndSales {
  _id: number;
  orderCount: number;
  amountTotal: number;
}

export interface TotalCardItem {
  title: string;
  value: string | number;
}
