import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Main from './pages/Main'
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (<>
  <GlobalStyle />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;
