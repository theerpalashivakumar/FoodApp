import React from 'react'
import { useRouteError } from 'react-router'


const Error = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <div>
       <h1> Somthing Went Wrong</h1>
       <h3>{err.statusText}...{err.status}</h3>
    </div>
  )
}

export default Error
