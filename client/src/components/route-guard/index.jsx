import React from 'react'
import { useLocation } from 'react-router-dom';

const RouteGuard = ({authenticated, user, element}) => {

    const location = useLocation();
    if(!authenticated && !location.pathname.includes('/auth')){
        return <Navigate to="/auth" />;
    }

    if(authenticated && user?.role !== 'admin' && (location.pathname.includes('admin') || location.pathname.includes('/auth'))){
        return <Navigate to="/home" />;
    }

    if(authenticated && user.role === 'admin' && location.pathname.includes('/auth')){
        return <Navigate to="/admin/dashboard" />;
    }




  return (
    <div>
      
    </div>
  )
}

export default RouteGuard
