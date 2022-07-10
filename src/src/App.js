import React, { useState, useEffect } from "react";
import About from "./components/pages/About";
import NavBar from "./components/NavBar";

function App() {
  const [currentPage, setCurrentPage] = useState('Dogs');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About/>
    }
  }

  useEffect(() => {
    document.title = currentPage;
  })

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      <NavBar onPageChange={handlePageChange}/>
      {renderPage()}
    </div>
  )
}

export default App;