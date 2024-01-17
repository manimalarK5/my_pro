import React from 'react'
import Singup from './Signup'
import { Login } from './Login';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Webpagecall() {
  return (
    <div>
      {/* <Singup /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path='/Home/:userName' element={<Home />} />
          <Route path='Singup' element={<Singup />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Webpagecall
