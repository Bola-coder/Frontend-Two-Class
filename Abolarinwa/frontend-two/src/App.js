import "./App.css";
import Form from "./components/Forms/Form";
// import Home from './components/Home';
// import About from './components/About';
// import PeopleList from "./components/PeopleList";
// import Count from './components/Count';
// import Navbar from "./components/project navbar/Navbar";
// import Banner from "./components/project navbar/Banner";
// import RandomUser from "./components/project navbar/RandomUser";
// import Header from "./components/Dashboard Project/Header";
// import headerDetails from "./components/Dashboard Project/Headerdetails";

function App() {
  document.title = "Navify";
  return (
    <div className="App">
      {/* <h1>Frontend Class Two</h1> */}
      {/* <About />
      <Home /> */}
      {/* <Header details={headerDetails}/>
      <PeopleList /> */}
      {/* <Count /> */}
      {/* This is project Navbar */}
      {/* <Navbar />
      <Banner />
      <RandomUser /> */}
      <Form />
    </div>
  );
}

export default App;
