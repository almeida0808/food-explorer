import { Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";
import { EditDishes } from "../pages/EditDishes";
import { CreateDishes } from "../pages/CreateDishes";
import { FoodDetails } from "../pages/FoodDetails";
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CreateDishes />} />
      <Route path="/edit/:id" element={<EditDishes />} />
      <Route path="/details/:id" element={<FoodDetails />} />
    <Route path="*" exact={true} element={<NotFound/>}/>
    </Routes>
  )
}