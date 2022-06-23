import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/Topics";
import TopicsByTopic from "./Components/TopicsByTopic";
import { Home } from "@mui/icons-material";

function App() {
  const [selectUser, setSelectUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  // const [sorted, setSorted] = useState(false);
  // const [sortByCat, setSortByCat] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Navbar selectUser={selectUser} />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route
          path="/articles"
          element={
            <Articles
            // setSorted={setSorted}
            // setSortByCat={setSortByCat}
            // sorted={sorted}
            // sortByCat={sortByCat}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle selectUser={selectUser} />}
        />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<TopicsByTopic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
