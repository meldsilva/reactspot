import logo from './logo.svg';
// import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Playlists from "./components/Playlists";
import {PageNotFound} from "./components/PageNotFound";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Podcasts from "./components/Podcasts";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            {/*<Route path="/" element={<Authenticator/>} />*/}
            <Route path="/" element={<Home/>} />
            <Route path="playlists" element={<Playlists/>} />
            <Route path="podcasts" element={<Podcasts/>} />
            <Route path="artists" element={<Artists/>} />
            <Route path="albums" element={<Albums/>} />

            <Route path="*" element={<PageNotFound/>} />
        </Routes>
          </BrowserRouter>
  );
}

export default App;
