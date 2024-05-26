import React, {useState, useEffect} from "react";
import Header from "./modules/header/navbar";
import "boxicons";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Paginas} from "./modules/paginas";
import { DataProvidier } from "./context/DataProvidier"
import { Carrito } from "./modules/carrito/Carrito";
import Login from "./modules/login/login";
import {useCookies} from "react-cookie"
import Registro from "./modules/login/registro";

function App() {
  const [cookies] = useCookies(["login"])
  const [login, setLogin] = useState(false);

  useEffect(()=>{
    if(cookies.login){
      setLogin(true);
    }
  }, [cookies]);

  return (
    <DataProvidier>
      {
        login ?
        <div className="App">
          <Router>
          <Header login={cookies.login}/>
          <Carrito/> 
          <Paginas/>
        </Router>
        </div>
        : 
        <Router>
          <Header login={cookies.login} />
          <Routes>
            <Route path="/" exact Component={Login} />
            <Route path="/registro" exact Component={Registro} />
          </Routes>
        </Router>
      }
        
      </DataProvidier>
    );
  }
export default App;