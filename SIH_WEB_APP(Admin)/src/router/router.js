import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { auth } from '../configs/firebase';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';

import { onIdTokenChanged } from 'firebase/auth'
import News from '../pages/News';

function Router() {

  const [user, set_user] = useState("");
  const [login,set_login]=useState(localStorage.getItem('token')??null);

  onIdTokenChanged((auth), function (user) {
    if (user) {
      set_user(user);
    }
  });



  return (
    <>
      {
        !user&&login ?
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route path="/login" exact element={<Login />} />
              </Routes>
            </BrowserRouter>
          </>
          :
          <>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/home" exact element={<Home />} />
                    <Route path="/news" exact element={<News />} />
                  </Routes>
                </BrowserRouter>
          </>
      }
    </>
  );
}

export default Router;