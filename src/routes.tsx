import { Home } from "pages";
import { Post } from "pages/monetag";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default function AppRoutes() {
    return (
        <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/post' element={<Post/>}/>
                </Routes>
        </Router>
    );
};