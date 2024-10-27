import { useState } from "react";
import "./App.css";
import { SortContext } from "./context/intex";
import Page from "./Page/Page";

function App() {
  const [isSort, setIsSort] = useState(null);

  return (
    <div className="bg-gray-900 text-white">
      <SortContext.Provider value={{ isSort, setIsSort }}>
        <Page />
      </SortContext.Provider>
    </div>
  );
}

export default App;
