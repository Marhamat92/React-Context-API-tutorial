import Button from "components/Button";
import Header from "components/Header";
import Profile from "components/Profile";
import {ThemeProvider} from "context/ThemeContext";
import { UserProvider } from "context/UserContext";

import React, { useEffect } from "react";


function Homepage() {


  return (
   <ThemeProvider>
     <UserProvider>
     <Header/>
     <hr className="my-2 h-2 bg-red-500"/>
     <Button />
     <br />
     <Profile/>
     </UserProvider>
   </ThemeProvider>
  )
}

export default Homepage;