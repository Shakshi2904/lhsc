import React from 'react';
import Navbar from './Navbar.jsx';
import Page from './Page.jsx';


function First() {
  const image = ['/image/intro2.jpg','/image/intro5.jpg','/image/intro1.jpg','/image/intro3.jpg','/image/intro5.jpg'];
  return (
    <div>
      <Navbar/>
      <Page images = {image}/>

      </div>
  );
}

export default First;