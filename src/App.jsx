import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Grid } from "./components/Grid";

export const App = () => {

  return (
    <div className='container mx-auto'>

      <Header />
      <Grid />

    </div>
  )
}
