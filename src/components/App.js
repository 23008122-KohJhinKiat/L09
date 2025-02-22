import { Routes, Route } from "react-router-dom";
//import logo from "../assets/red30-tech-logo.png";
import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Session from "./Session";
import Header from "./Header";
import Category from "./Category";
import Register from "./Register";

function App() {
  return (
    <div className="app">
      <Header />
     

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech"></Home>} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} >
          <Route path=":catId" element={<Category />} >
            <Route path = ":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a category from above</h3>} /> 
          </Route>   
          <Route path="register" element={<Register />} />
          <Route
        path="*"
        element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>
      

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
