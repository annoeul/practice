/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import { Address, Restaurant } from "../model/restaurant"

interface OwnProps {
  data: Restaurant
  changeAddress: (address: Address) => void
}

function Store({ data }: OwnProps) {
  return <div>{data.name}</div>
}

export default Store
