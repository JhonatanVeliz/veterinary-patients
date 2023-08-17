import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Grid } from "./components/Grid";
import { Footer } from "./components/Footer";

export const App = () => {

  return (
    <>

      <div className='container mx-auto'>
        <Header />
        <Grid />
      </div>

      <Footer />
      
    </>
  )
}
