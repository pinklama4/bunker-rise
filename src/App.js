import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Импорты страниц для Routing
import {Main} from "./Pages/Main/Main";
import {Rules} from "./Pages/Rules/Rules";
import {Instruction} from "./Pages/Instructions/Instruction";
import {AboutUs} from "./Pages/AboutUs/AboutUs";
import {LobbyForCreator} from "./Pages/LobbyForCreator/LobbyForCreator";
import {LobbyForPlayer} from "./Pages/LobbyForPlayer/LobbyForPlayer";
import {Play} from "./Pages/Play/Play";

//Основные стили
import './Styles/MainStyles.scss'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main/>} />
          <Route path="rules" element={<Rules/>} />
          <Route path="instruction" element={<Instruction/>} />
          <Route path="aboutus" element={<AboutUs/>} />
          <Route path="lobbycreate" element={<LobbyForCreator/>} />
          <Route path="lobby" element={<LobbyForPlayer/>} />
          <Route path="play" element={<Play/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
