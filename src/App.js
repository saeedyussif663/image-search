import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import SearchResults from "./Components/SearchResults";


function App() {
  return (
    <div  className="h-full">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search-results" element={<SearchResults/>}/>
      </Routes>
    </div>
  );
}

export default App;
