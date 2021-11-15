import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { DashboardContianer } from './containers';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContianer />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App;