import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import WatchList from "./components/WatchList";
import Header from "./components/Header";
import Watched from "./components/Watched";
const MovieApp=()=>{
    return(
        <div>
            <Router>
            <Header />
                <Routes>
                    <Route element={<WatchList />} path="/"></Route>
                    <Route element={<SearchPage />} path="/searchpage"> </Route>
                    <Route element={<Watched />} path="/Watched"></Route>
            </Routes>
            </Router>
        </div>
    )
}
export default MovieApp;