
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBBar from './component/NavBBar';
import  ShoppingList  from "./component/ShoppingList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBBar/>
       <ShoppingList/>
      </header>
    </div>
  );
}

export default App;
