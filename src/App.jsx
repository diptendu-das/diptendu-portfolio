import { Navbar } from "./Components/Navbar";
import { ContentArea } from "./Components/ContentArea";
import { Footer } from "./Components/Footer";
import { ScrollToTop } from "./Components/ScrollToTop";
import { useState, useEffect } from 'react';



function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() => {
  //     if (isDarkMode) {
  //         document.documentElement.classList.add('dark');
  //         document.body.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-black', 'text-white');
  //         document.body.classList.remove('bg-gradient-to-br', 'from-gray-100', 'to-white', 'text-black');
  //     } else {
  //         document.documentElement.classList.remove('dark');
  //         document.body.classList.add('bg-gradient-to-br', 'from-gray-100', 'to-white', 'text-black');
  //         document.body.classList.remove('bg-gradient-to-br', 'from-gray-900', 'to-black', 'text-white');
  //     }
  // }, [isDarkMode]);



  return (<>

    <div className={`flex flex-col h-screen ${isDarkMode ? "dark" : "light"}`}>
      <Navbar isDarkMode={isDarkMode} isSidebarOpen={isSidebarOpen} setIsDarkMode={setIsDarkMode} setIsSidebarOpen={setIsSidebarOpen} ></Navbar>
      <ContentArea isDarkMode={isDarkMode}></ContentArea>
      <Footer></Footer>
      <ScrollToTop />
    </div >
  </>
  )
}

export default App;