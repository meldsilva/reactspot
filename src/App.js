import React from "react";
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Playlists from "./components/Playlists";
import {PageNotFound} from "./components/PageNotFound";
import Albums from "./components/Albums";
import Podcasts from "./components/Podcasts";
import RedirectPage from "./components/RedirectPage";
import SpotifyPage from './components/SpotifyPage';
import PlaylistTracks from './components/PlaylistTracks';
import PlaylistTracksMUI from './components/PlaylistTracksMUI';
import NewReleases from './components/NewReleases';


function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="spotifypage" element={<SpotifyPage />}> 
              <Route path="playlists" element={<Playlists />} />
              <Route path="podcasts" element={<Podcasts />} />
              <Route path="albums" element={<Albums />} />
              <Route path="newreleases" element={<NewReleases />} />
            </Route>
          {/* <Route path="playlisttracks/:playlistname/:playlistid" element={<PlaylistTracks />} /> */}
          <Route path="playlistTracksmui/:playlistname/:playlistid" element={<PlaylistTracksMUI />} />
          <Route path="callback" element={<RedirectPage />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
