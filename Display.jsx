import React, { createContext, useState } from 'react'
import { dishes } from '../../assests/assests'
import './Display.css'

export const DisplayContext = createContext()

export const DisplayProvider = ({children})=>{
    const[menu_list,setMenuList] = useState(dishes)

return( 
    <div className='display'>
<DisplayContext.Provider value={{menu_list}}>
        {children}
    </DisplayContext.Provider>
    </div>
    
)
}
