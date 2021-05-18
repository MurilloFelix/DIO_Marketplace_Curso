import { ProductsCartProps } from "."

interface addToCartRequestData{
  type: String,
    id: String
}
export interface addToCardSuccessData{
  type: String,
  product:  ProductsCartProps
}

export function addToCartRequest(id : String): addToCartRequestData{
  return {
    type: '@cart/ADD_REQUEST',
    id
  }
}

export function addToCardSuccess(product : ProductsCartProps) : addToCardSuccessData{
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  }
}
