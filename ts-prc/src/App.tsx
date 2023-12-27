import React, { useState } from "react"
import Store from "./components/Store"
import { Restaurant } from "./model/restaurant"

const data: Restaurant = {
  name: "asd",
  category: "western",
  address: {
    city: "geoje",
    detail: "somewhere",
    zipCode: 123123,
  },
  menu: [
    { name: "rose1", price: 12000, category: "PASTA1" },
    { name: "rose2", price: 22000, category: "PASTA2" },
    { name: "rose3", price: 32000, category: "PASTA3" },
  ],
}

function App() {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddress = () => {
    setMyRestaurant((prevState) => ({ ...prevState, address: { ...prevState.address } }))
  }

  return (
    <div>
      <Store data={myRestaurant} changeAddress={changeAddress} />
    </div>
  )
}

export default App
