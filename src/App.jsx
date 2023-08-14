import React, { useState } from 'react';
import { Header } from "./components/Header.jsx";
import { Grid } from "./components/Grid.jsx";

export const App = () => {

  return (
    <div className='container mx-auto'>

      <Header />
      <Grid />

    </div>
  )
}
