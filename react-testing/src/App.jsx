import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testing from "./docs/Testing";
import NewIcons from "./docs/NewIcons";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Testing />}/>
        <Route path="/NewIcons" element={<NewIcons />} />
        
      </Routes>
    </BrowserRouter>
  )
}