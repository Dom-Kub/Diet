import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTE_TYPES } from "./common/RouteTpes"
import Navbar from "./navbar/Navbar"
import Home from "./pages/Home"

const Router = () => {
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}>
            <Route path={ROUTE_TYPES.HOME} element={<Home/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
)
}
export default Router