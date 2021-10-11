import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


export const PrivateRoute =({...rest })=> {

    const user = useSelector(state => state)

    return user? <Route {...rest} /> : <Redirect to={{ pathname: "/login" }} />
 
}

