import { Routes, Route, Navigate } from 'react-router-dom'

import { Cart } from '../pages/Cart'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { CreateDish } from '../pages/CreateDish'
import { EditDish } from '../pages/EditDish'
import { Profile } from '../pages/Profile'
import { Orders } from '../pages/Orders'
import { Favorites } from '../pages/Favorites'
import { Payment } from '../pages/Payment'

export function AppRoutes(){
  return(
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/details/:id' element={<Details />} /> 
      <Route path='/createdish' element={<CreateDish />} />
      <Route path='/editdish/:id' element={<EditDish />} />
      <Route path='/profile' element={<Profile />}/>
      <Route path='/orders' element={<Orders />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/payment' element={<Payment />} />

      <Route path='*' element={<Navigate to='/' />} />

    </Routes>
  )
}