import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {

    const {theme,setTheme} = useContext(ThemeContext)


  return (
    <div className={`${theme==="Dark Mode"? "bg-black h-80 text-white" : "bg-white text-black h-80" }`}>Screen Mode:{theme}</div>
  )
}

export default Header