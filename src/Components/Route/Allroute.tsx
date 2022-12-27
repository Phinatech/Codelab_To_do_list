import React,{useState} from 'react'
import { useRoutes } from 'react-router-dom'
import Hero from '../Hero/Hero'

import LandingPage from './LandingPage'

const Allroute = () => {
let elements = useRoutes([

    {
        path:"/",
        element:<LandingPage/>

    },

    {
        path:"/To-dolist",
        element:<Hero/>
    }

])

  return elements 
    
  
}

export default Allroute