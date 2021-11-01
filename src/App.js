import "./App.css";
import Header from "./components/Header";
// import MainC from "./components/MainC";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      {/* <MainC /> */}
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
