import React, { FC } from 'react'
import Nav from '../components/Nav';

const Error:FC<any>  = () => {
  return <>
    <Nav/>
    <main>
        <h1>An Error Occurred!</h1>
        <p>Could not find Page!</p>
    </main>
  </>

}

export default Error