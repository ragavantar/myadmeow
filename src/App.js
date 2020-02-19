import React from 'react';
import './App.scss';

import Nav from "./components/nav";
import Image from "./components/image";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav></Nav>
      </div>
      <div className="content">
        Hello
        {/* <Image
        bgImg="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        topImg="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        /> */}
      </div>
    </div>
  );
}

export default App;
