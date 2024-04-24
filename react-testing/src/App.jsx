import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testing from "./docs/Testing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Testing />}/>
      </Routes>
    </BrowserRouter>
  )
}