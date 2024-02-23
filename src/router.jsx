import { createBrowserRouter, } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';

import Cart from './pages/Cart/Cart';





export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
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

  
  ]);