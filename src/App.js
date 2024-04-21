import './styles/styles.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Main} from "./Pages/Main/Main"
import {Game} from "./Pages/Game/Game";
import {AboutUs} from "./Pages/AboutUs/AboutUs";
import {Instructions} from "./Pages/Instructions/Instructions";
import {LobbyForCreator} from "./Pages/LobbyForCreator/LobbyForCreator";
import {LobbyForGamer} from "./Pages/LobbyForGamer/LobbyForGamer";
import {Result} from "./Pages/Results/Result";
import {Rules} from "./Pages/Rules/Rules";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Main/>} />
            <Route path="game" element={<Game/>} />
            <Route path="aboutus" element={<AboutUs/>} />
            <Route path="instructions" element={<Instructions/>} />
            <Route path="lobbyForCreator" element={<LobbyForCreator/>} />
            <Route path="lobbyForGamer" element={<LobbyForGamer/>} />
            <Route path="result" element={<Result/>} />
            <Route path="rules" element={<Rules/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
