import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";

function App() {
  const [selectUser, setSelectUser] = useState({
    username: "butter_bridge",
    name: "jonny",
    avatar_url:
      "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
  });
  return (
    <BrowserRouter>
      <Header />
      <Navbar selectUser={selectUser} />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
