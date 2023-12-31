 import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { Details } from "../Details"

export const Router=()=>{
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/details" element={<Details/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}