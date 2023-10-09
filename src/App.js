import React, { useState } from "react";
import { Folder } from "./Folder";
import { data } from "./data";

import "./styles.css";

// make root folder

function App() {
  const [fileSystem] = useState(data);
  return (
    <div className="App">
      <h1>Expandable File System</h1>
      <Folder name="Root" contents={fileSystem} />
    </div>
  );
}

export default App;
