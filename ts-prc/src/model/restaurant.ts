export type Restaurant = {
  name: string
  category: string
  address: Address
  menu: Menu[]
}

export type Address = {
  city: string
  detail: string
  zipCode: number
}

export type Menu = {
  name: string
  price: number
  category: string
}

export type ApiResponse<T> = {
  //어떤 타입이 올지 모를때 <T>로 해놓고
  data: T[]
  totalPage: number
  page: number
}

export type RestaurantResponse = ApiResponse<Restaurant> //이렇게 사용
export type MenuRespnse = ApiResponse<Menu>
