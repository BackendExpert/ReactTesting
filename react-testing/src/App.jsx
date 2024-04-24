import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testing from "./docs/Testing";
import IconTest from "./docs/IconTest";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Testing />}/>
        <Route path="/IconTest" element={<IconTest />} />
      </Routes>
    </BrowserRouter>
  )
}