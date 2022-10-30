import React, { useState } from "react";
import { useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Counter from "./components/Counter";
import AuthContext from "./store/AuthContext";

import styled, { ThemeProvider } from "styled-components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //false => true => false
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem("isLogin"); //1

    if (storedUserLoggedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLogin", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLogin");
  };

  return (
    <React.Fragment>
       <StyledApp isOn={isOn}>
      <AuthContext.Provider
        value={{ isLogin: isLoggedIn, onLogout: logoutHandler , isOn:isOn, setIsOn:setIsOn}}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
          <Counter />
        </main>
      </AuthContext.Provider> 
        </StyledApp>
    </React.Fragment>
  );
}

export default App;

const StyledApp = styled.div`
background-color: ${(props) => (props.isOn === true ? "black" : 'white')};
transition: background-color 500ms linear;
min-height: 700px;

`
