import React from 'react'

import Login from '../components/Login'
import Profilepage from '../components/Profilepage'
import Signup from '../components/Signup'

const Accounts = () => {
  return (
    <div>
      Accounts
      <Signup/>
      <Profilepage/>
      {/* <Useaxios/> */}
      <Login/>
      
    </div>
  )
}

export default Accounts