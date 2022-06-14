import React from 'react'

const Badge = ({cont}) => {
  return (
     <span class=" notify position-absolute top-20  start-100 translate-middle badge rounded-pill bg-danger">
          {cont}
          <span class="visually-hidden">unread messages</span>
   </span> 
  )
}

export default Badge