// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from "./pages/Home"
// import Layout from "./Layout"
// import Contact from "./pages/Contact"
// import About from "./pages/About"
// import Service from "./pages/Service"
// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route  path="/" element ={<Layout/>}>
//         <Route index element ={<Home/>}/>
//           <Route path="about" element={<About/>}/>
//           <Route path="contact" element={<Contact/>}/>
//           <Route path="service" element={<Service/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

import React from 'react'
import Effect from './Effect'
import Reducer from './Reducer'
import Call from './Call'
import CounterComponent from './CounterComponent'
import Memo from './Memo'

export default function App() {
  return (
    <div><Effect/>
    <Reducer/>
    <Call/><CounterComponent/><Memo/>
    </div>
  )
}
