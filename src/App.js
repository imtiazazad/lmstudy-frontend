import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SingleCourse from "./Components-Nahid/SingleCourse/SingleCourse";
import Overview from "./Components-Nahid/SingleCourse/nestedTabPage/Overview";
import Curriculum from "./Components-Nahid/SingleCourse/nestedTabPage/Curriculum";
import Instructor from "./Components-Nahid/SingleCourse/nestedTabPage/Instructor";
import Reviews from "./Components-Nahid/SingleCourse/nestedTabPage/Reviews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<SingleCourse />} >
                <Route path="overview" element={<Overview/>}/>
                <Route path="curriculum" element={<Curriculum/>}/>
                <Route path="instructor" element={<Instructor/>}/>
                <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
