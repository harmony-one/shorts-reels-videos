import React from 'react';
import { Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import VideoHome from './routes/video-home';
import VideoReels from './routes/video-reels';
import VideoUpload from "./routes/video-upload";
import VideoUploadInfo from "./routes/video-upload-info";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/videos' element={<VideoHome />} />
        <Route path='/videos/upload' element={<VideoUpload />} />
        <Route path='/videos/upload/:videoId' element={<VideoUploadInfo />} />
        <Route path='/videos/:vanityUrl' element={<VideoReels />}/>
      </Routes>
    </div>
  );
}

export default App;
