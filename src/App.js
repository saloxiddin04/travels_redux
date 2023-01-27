import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./pages/Navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/add" element={<Add/>}/>
                    <Route exact path="/edit/:id" element={<Edit/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
