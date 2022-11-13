export interface IOrder {
    _id: string
    user_id:string
    status:string
    items: IOrderItem[] 
    depositRatio:numebr
    createdAt:string
    updatedAt:string
    __v?: number
    paymentInfo?:IPaymentInfo
  }

  export interface IOrderItem {
    design: IOrderItemDesign
    quotation: string
    quotationDetails: IOrderItemQuotationDetail[]
    image: string
    constructionDrawing: string
  }

  export interface IOrderItemDesign {
    designName:string
    courtSize:IOrderItemDesignCourtSize
    tileColor:IOrderItemDesignTileColor[]
  }

  export interface IOrderItemQuotationDetail {
    color:string
    quantity:number 
  }

  export interface IOrderItemDesignCourtSize{
    name:string
    length:number
    width:number
    threePointLine:number
    threePointRadius:number
    centreCircleRadius:number
    restrictedAreaLength:number
    restrictedAreaWidth:number
    sideBorderWidth:number
    lengthOfCorner:number
    lineBorderWidth:number
  }

  export interface IOrderItemDesignTileColor{
    location: string
    color:string
}
  export interface IPaymentInfo {
    id:string
    orderID:string
    name:string
    email:string
    phone:string
    billingAddress:IbillingAddressDetails
    constructionAddress:IConstructionAddress
    currency:string
    amountTotal:number
    sessionId:string
    createdAt:string
    updatedAt:string
    __v?: number
  }

  export interface IbillingAddressDetails{
    city: string
    country:string
    line1:string
    line2?:string
    state:string
    postalCode:string
  }

  export interface IConstructionAddress{
    city: string
    country:string
    line1:string
    line2?:string
    state:string
    postalCode:string
  }
// for pagination use
export interface IListOrdersResponse<T> {
  offset: number;
  limit: number;
  total: number;
  totalPages: number;
  data: T[];
}
