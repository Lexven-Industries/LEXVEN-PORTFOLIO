import { createContext, useState } from "react";
import "aos/dist/aos.css";
import Layout from "./components/Layout";

export const MyContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // if (darkMode === false) {
    //   setDarkMode(true)
    // } else if (darkMode === true) {
    //   setDarkMode(false)
    // }
  };

  return (
    <>
      <MyContext.Provider value={toggleDarkMode}>
        <section className={`${darkMode && "dark"}`}>
          
          <Layout />
        </section>
      </MyContext.Provider>
    </>
  );
}

export default App;
