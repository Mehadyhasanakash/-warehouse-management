import { useAuthState } from "react-firebase-hooks/auth";

import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase/FirebaseHook";

    
import React from 'react';

const PrivateRoute = ({children}) => {
    const [user] = useAuthState(auth);
    let location = useLocation();

    if (user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
      return children;

      }
    
      else{
        return <Navigate to="/login" state={{ from: location }} replace />;

      }
};

export default PrivateRoute;
  
  
  