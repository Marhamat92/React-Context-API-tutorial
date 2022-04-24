//I used different export method here than ThemeContext. Both methods are ok but this method is more clear
//this is because of not use of import useContext again and again to make it more readable

import {createContext,useState,useContext} from "react";

const UserContext = createContext();


export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const values = {
        user,
        setUser,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);