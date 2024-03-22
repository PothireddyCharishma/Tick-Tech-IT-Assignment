import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  state = {
    dark: false,
  };

  updateState = () => {
    this.setState((prevState) => ({ dark: !prevState.dark }));
  };

  render() {
    const { dark } = this.state;
    return (
      <BrowserRouter>
        <div className={dark === false ? "app-light" : "app-dark"}>
          <Navbar dark={dark} updateState={this.updateState} />
          <Routes>
            <Route path="/" element={<Home dark={dark} />} />
            <Route path="/about" element={<About dark={dark} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
