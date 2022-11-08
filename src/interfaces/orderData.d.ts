export interface IOrder {
    _id: string
    user_id:string
    status:string
    items: IOrderItem[]
    createdAt:string
    updatedAt:string
    __v?: number
  }

  export interface IOrderItem {
    design: IOrderItemDesign
    quotation: string
    quotationDetails: IOrderItemQutationDetail[]
    image: string
    constructionDrawing: string
  }

  export interface IOrderItemDesign {
    designName:string
    courtSize:IOrderItemDesignCourtSize
    tileColor:IOrderItemDesignTileColor[]
  }

  export interface IOrderItemQutationDetail {
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

// for pagination use
export interface IListOrdersResponse<T> {
  offset: number;
  limit: number;
  total: number;
  totalPages: number;
  data: T[];
}
