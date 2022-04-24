import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {

    const {theme,setTheme} = useContext(ThemeContext)

    

  return (<>
  
    <button onClick={()=>setTheme(theme==="Dark Mode"?"Light Mode" : "Dark Mode")}  className='bg-green-500 border rounded-md px-3 py-2'>
        Change Theme
    </button>
    </>
  )
}

export default Button