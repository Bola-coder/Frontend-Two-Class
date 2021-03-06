import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Form from "./components/Forms/Form";
// import Home from './components/Home';
// import About from './components/About';
// import PeopleList from "./components/PeopleList";
// import Count from './components/Count';
import Navbar from "./components/project navbar/Navbar";
import Banner from "./components/project navbar/Banner";
import RandomUser from "./components/project navbar/RandomUser";
import Error404 from "./components/project navbar/Error404";
import Blog from "./components/project navbar/Blog";
import BlogContent from "./components/project navbar/BlogContent";
// import Header from "./components/Dashboard Project/Header";
// import headerDetails from "./components/Dashboard Project/Headerdetails";

function App() {
  document.title = "Navify";
  return (
    <div className="App">
      <Router>
        {/* <About />
      <Home /> */}
        {/* <Header details={headerDetails}/>
      <PeopleList /> */}
        {/* <Count /> */}
        {/* This is project Navbar */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/random" element={<RandomUser />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogContent />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        {/* <Form /> */}
      </Router>
    </div>
  );
}

export default App;
