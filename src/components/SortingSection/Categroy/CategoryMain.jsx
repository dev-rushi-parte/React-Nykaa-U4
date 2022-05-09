import React from 'react'
import Category from './Category'
import Gender from './Gender'
import Price from './Price'

export default function CategoryMain() {
  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
<Category/>
<Price/>
<Gender/>
    </div>
  )
}
