import React from 'react'
import { Header } from '../../Header/Header'
import { ExploreMenu } from '../../component/ExploreMenu/ExploreMenu'
import { About } from '../../component/About/About'

import { Dish } from '../../component/Dishes/Dish'

import {Footer} from '../../component/Footer/Footer'
import { DisplayContext, DisplayProvider } from '../../component/Displaydish/Display'



export const Home = () => {
  return (
<>
<Header/>

<About/>


  <ExploreMenu></ExploreMenu>

<DisplayProvider>
<Dish/>
</DisplayProvider>


<Footer/>


</>
  )
}
