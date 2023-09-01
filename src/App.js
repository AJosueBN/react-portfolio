import './App.css';
import {useState, createContext} from "react"
import Header from "./components/Header"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

export const AppContext = createContext()

// Sets default page to About
function App() {
  const [currentPage, setCurrentPage] = useState("About")
  let content;

  if(currentPage === "About") {
    content =  <About />
  }
  if(currentPage === "Portfolio") {
    content = <Portfolio />
  }
  if(currentPage === "Resume") {
    content =  <Resume />
  }
  if(currentPage === "Contact") {
    content =  <Contact />
  }

  return (
    <div className="App">
      <AppContext.Provider value={{currentPage, setCurrentPage}}>
      <Header />
      <main>
      {content}
      </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
