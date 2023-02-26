import { Routes, Route }  from "react-router-dom";
import Header from  "./components/header.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";

function App(){
    return (
        <div>
            <Header></Header>   
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}
export default App;