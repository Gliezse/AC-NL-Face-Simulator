import React from 'react';
import MainPage from "pages/MainPage";
import "styles/main.css";

function App() {
  return (
    <div className="App">
      <MainPage />
      <span className="version">{process.env.REACT_APP_VERSION}</span>
    </div>
  );
}

export default App;
