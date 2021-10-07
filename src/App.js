import React from "react";
import logo from "./logo.png";
import "./App.css";
import { SkillProvider, SkillTreeGroup, SkillTree } from "beautiful-skill-tree";
import { hostility } from './data/data';

function App() {
  return (
    <div className="App">
      <SkillProvider>
        <SkillTreeGroup>
          {() => {
            return(
              <SkillTree treeId="motion" titlt="Motion" data={hostility} />
            );
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}

export default App;
