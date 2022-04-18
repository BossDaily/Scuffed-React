import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: 'What is CCSMP?',
    content: 'CCSMP is the best mc server of all time'
  },
  {
    title: 'Why CCSMP',
    content: 'Because we are goated' 
  },
  {
    title: 'Among us',
    content: 'Mid game'
  }
]

const App = () => {
  return(
    <h1>
      Fard
      <Accordion items={items} />
    </h1>
  )
}

export default App;
