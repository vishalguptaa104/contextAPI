import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null)

    return (

        // children iski default property hai jo btata hai provider ko ki jitne bhi child compoentns hai vo sb isme include ho jayenge and fir hum usko wrap krdenge provider ke sath.. user context ke to ye usercontext ke data ko access kr payenge or hum value bhi pas kr skte hai value attriute se.
        
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;