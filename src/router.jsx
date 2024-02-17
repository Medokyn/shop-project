import { createBrowserRouter, } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';
import Category from './pages/home/Category/Category';




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Catalog",
      element: <Catalog/>,
    },
    {
      path: "/About",
      element: <About/>
    },
    {
      path: "/Contacts",
      element: <Contacts/>
    },
    {
      path: "/Cart",
      element: <Cart/>
    },
    {
      path: "/Categories/:id",
      element: <Category/>
    },
  
  ]);