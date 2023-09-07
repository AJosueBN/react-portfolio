// various imported files within the same app
import './App.css';
import {useState, createContext} from "react"
import Header from "./components/Header"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

export const AppContext = createContext()

// Sets default page to About and can render different components in app
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
    // Part that renders onto the page
  return (
    <div className="App">
      {/*AppContext.Provider helps to keep updated page changes in app */}
      <AppContext.Provider value={{currentPage, setCurrentPage}}>
      <Header />
      <main>
      {content}
      </main>
      <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
