import Header from "./components/Header";
import VideoThumbnail from "./components/VideoThumbnail";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div className="">
      <Header/>

      <div className=" my-5">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/video/:id" element={<VideoPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
