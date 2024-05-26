import React from "react";
import Header from "./modules/header/navbar";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./modules/paginas";
import { DataProvidier } from "./context/DataProvidier"
import { Carrito } from "./modules/carrito/Carrito";

function App() {
    return (
      <DataProvidier>
      <div className="App">
        <Router>
        <Header/>
        <Carrito/> 
        <Paginas/>
        </Router>
      </div>
      </DataProvidier>
    );
  }
export default App;