import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Post from "./components/pages/Post";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/add" element={<PostAdd />} />
      <Route path="/post/edit/:id" element={<PostEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
