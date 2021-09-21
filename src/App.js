import logo from './logo.svg';
// import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Playlists from "./components/Playlists";
import {PageNotFound} from "./components/PageNotFound";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Podcasts from "./components/Podcasts";
import RedirectPage from "./components/RedirectPage";
import Authenticator from "./components/Authenticator";
function App() {
  return (
    <>
      <Authenticator />
        <Routes>
          <Route path="/" element={<Home token=""/>} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="artists" element={<Artists />} />
          <Route path="albums" element={<Albums />} />
          <Route path="callback" element={<RedirectPage />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
