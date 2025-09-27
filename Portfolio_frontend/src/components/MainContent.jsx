import React from "react";
import Cards from "./Cards";
import Book from "./Book";
// import Library from "./Library";
// import  "./Library.css";
import "./MainContent.css";
import "../App.css";
import Book3d from "../components43d/Book3d"; // Import the 3D book component
import PortfolioMemoryGame from "./PortfolioMemoryGame"; // Import the memory game component

const MainContent = ({ videoTransitioned }) => {
  if (!videoTransitioned) return null;


  return (
    < >
     {/* <section style={{ height: "650px" }} id="book-section"> */}
      {/* <Book3d /> */}
      {/* </section> */}
      {/* <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} /> */}
     
      {/* <section> */}
        {/* <div className='container'> */}
      {/* <Book /> */}
      <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />
      {/* </section> */}
      {/* Portfolio Cards Section */}
      <Cards />
      <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />
      {/* Portfolio Memory Game Section */}
      <PortfolioMemoryGame />
      {/* Library Section */}
      {/* <Library onBookClick={handleBookClick} /> */}
      <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />
     
    </>
  );
};

export default MainContent;
