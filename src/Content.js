import React from 'react'
import { useState } from 'react';


const Content = () => {
    const [items, setitems] = useState([
      {
        id: 1,
        checked: false,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"

      },
      {
        id: 2,
        checked: false,
        item: "Item 2"
      },
      {
        id: 3,
        checked: false,
        item: "Item 3"
      }
    ]);
    
  return (
    <main>
      
    </main>
  )
}

export default Content