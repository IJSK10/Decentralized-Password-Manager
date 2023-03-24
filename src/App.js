import React from "react";
import Intro from "./intro";
import App1 from "./Post/App1";
import Display from "./Display/Display"
import Key from "./Security/Key"
import {
    BrowserRouter as Router,
    Routes,
    Route} from "react-router-dom";
function App()
{
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Intro/>} />
            <Route path="new" element={<App1/>}/>
            <Route path="key" element={<Key />} />
            <Route path="id" element={<Display />} />
          </Routes>
        </Router>
    );
}
export default App;