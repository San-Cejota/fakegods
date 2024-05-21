import React from "react";
import Header from "./modules/header/navbar";
import ProductosListen from "./modules/productos/productos";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./modules/paginas";
import { DataProvidier } from "./context/DataProvidier"

function App() {
    return (
      <DataProvidier>
      <div className="App">
        <Router>
        <Header/>

        <Paginas/>
        </Router>
      </div>
      </DataProvidier>
    );
  }
export default App;