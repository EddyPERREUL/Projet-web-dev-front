import React from "react";
import "./App.css";
import Create from "./components/Create";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Login/>
      <Todo/>
      <Create />
      <Footer/>
    </>
  );
}

export default App;
