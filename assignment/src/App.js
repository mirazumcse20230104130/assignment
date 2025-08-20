import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import MyArticles from "./pages/MyArticles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [page, setPage] = useState("profile");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setPage={setPage} page={page} />
      <div style={{ flex: 1, marginLeft: "220px", transition: "margin-left 0.3s" }}>
        {page === "profile" && <Profile />}
        {page === "articles" && <MyArticles />}
      </div>
    </div>
  );
}

export default App;
