import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "components/Header/Header";
import TaskList from "components/TaskList/TaskList";
import TaskDetails from "components/TaskDetails/TaskDetails";

function App() {
  return (
    <div className="Container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
