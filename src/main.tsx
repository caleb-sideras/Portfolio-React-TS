import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Routes/Home'
import App from './App'
import Audio from './Routes/Audio'
import ThreeJS  from './Routes/ThreeJS'
import Projects from './Routes/Projects'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "animate.css/animate.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="audio" element={<Audio />} />
          <Route path="projects" element={<Projects />} />
          <Route path="threejs" element={<ThreeJS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
