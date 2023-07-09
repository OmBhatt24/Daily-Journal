import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import AboutMe from "./pages/About-Me";
import Layout from "./pages/Layout";
import Compose from "./pages/Compose";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<AboutMe />} /> */}
          <Route path="compose" element={<Compose />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
