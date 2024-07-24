import { Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";
import { EditDishes } from "../pages/EditDishes";
import { CreateDishes } from "../pages/CreateDishes";
import { FoodDetails } from "../pages/FoodDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CreateDishes />} />
      <Route path="/edit" element={<EditDishes />} />
      <Route path="/details/:id" element={<FoodDetails />} />
    </Routes>
  )
}