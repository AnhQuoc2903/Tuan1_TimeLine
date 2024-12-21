import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Post} from './Routes/Route'

const App = () => {
  return (
    <Router>
      <Routes>
        {Post.map((post) => {
          const Path = post.path;
          const Page = post.page;
          return (
            <Route key={post.path} path={Path} element={<Page />} />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;