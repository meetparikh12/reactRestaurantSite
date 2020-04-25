import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Specialities from "./components/Specialities";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <AboutUs />
        <Specialities />
        <Menu/>
        <Reservation/>
        <ContactUs/>
      </div>
    );
  }
}
export default App;
