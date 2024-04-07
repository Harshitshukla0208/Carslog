import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CodeEditor from "./Components/CodeEditor";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/editor' element = {<CodeEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;