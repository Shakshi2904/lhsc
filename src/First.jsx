import React from 'react';
import Navbar from './Navbar.jsx';
import Page from './Page.jsx';


function First() {
  const image = ['/image/intro1.jpg','/image/intro2.jpg','/image/intro3.jpg'];
  return (
    <div>
      <Navbar/>
      <Page images = {image}/>

      </div>
  );
}

export default First;