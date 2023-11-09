import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import './App.css';
import Search from './Search/Search';
import List from './List/List';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/List/:data" element={<List />} />
        </Route>

      </Routes>
  );
}
