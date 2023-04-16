import React, {useContext} from 'react'
import { UserContext } from '../context/userContext'
import { Navigate, Outlet } from 'react-router-dom'

export default function Private() {
    const {currentUser} = useContext(UserContext)
    

    if(!currentUser){
        return <Navigate to="/" />
    }

  return (
    <div><Outlet/></div>
  )
}
