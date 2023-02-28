import './App.css';
import React, {useState} from "react";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    const [activeTab, setActiveTab] = useState("Home");
    const [data, setData] = useState([]);

    return (<React.Fragment>
        <div>
            <ul className="header">
                <li className="header" onClick={() => setActiveTab("Home")}>Home</li>
                <li className="header" onClick={() => setActiveTab("About")}>About</li>
            </ul>
        </div>
        {activeTab == "Home" && <Home data={data} setData={setData}/>}
        {activeTab == "About" && <About data={data.slice(0,2)}/>}

    </React.Fragment>);
}

export default App;
