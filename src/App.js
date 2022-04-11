import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Attend from './my-ex/useReducer/Attend';
import Deposit from './my-ex/useReducer/Deposit';
import Toggle from './my-ex/useEffect/Toggle';
import TodoTemplate from './my-ex/todo/TodoTemplate';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/todo' element={<TodoTemplate />} />
        <Route path='/deposit' element={<Deposit />} />
        <Route path='/attend' element={<Attend />} />
        <Route path='/timer' element={<Toggle />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;

