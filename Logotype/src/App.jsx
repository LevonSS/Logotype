import { useState } from "react";
import Search from "../src/components/search/Search";
import "./App.css";
import Content from "./layouts/content/Content";
import Header from "./layouts/header/Header";

function App() {
  const [searchQuery, setSearchQuery] = useState();

  return (
    <>
      <Header>
        <Search searchText={searchQuery} setSearchText={setSearchQuery} />
      </Header>
      <Content searchText={searchQuery} />
    </>
  );
}

export default App;
