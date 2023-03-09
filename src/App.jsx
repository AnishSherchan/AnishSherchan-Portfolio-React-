import reactLogo from "./assets/react.svg";
import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import Contents from "./components/Content";
import Footer from "./components/Content/Footer";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navClasses = `flex items-center justify-center h-16 ${
    scrollPosition >= 180 ? "bg-[#252836] transition-colors duration-500" : ""
  }`;

  return (
    <div className=" bg-back-ground h-fit">
      <NavBar navClasses={navClasses} />
      <div className=" px-3 md:px-20">
        <Contents />
      </div>
      <Footer />
    </div>
  );
}

export default App;
