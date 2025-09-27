import React, { useState } from 'react';
import './Home.css';
import Book from './Book';
import Book3d from '../components43d/Book3d';

function Home({ videoTransitioned }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelection = (bookType) => {
    setSelectedBook(bookType);
  };

  const closeBook = () => {
    setSelectedBook(null);
  };

  // If a book is selected, render only that book
  if (selectedBook) {
    return (
      <div className={`book-viewer ${selectedBook === '3d' ? 'book-viewer-3d' : 'book-viewer-plain'}`}>
        <button className="close-book-btn" onClick={closeBook}>
          ← Back to Book Selection
        </button>
        {selectedBook === 'plain' ? <Book /> : <Book3d />}
      </div>
    );
  }

  return (
    <section className={`home ${videoTransitioned ? 'visible' : 'hidden'}`} id="home">
      <div className="home-content">
        <h1>Welcome Again to My Portfolio</h1>
        <p>Choose your preferred book format to explore my portfolio</p>
        <p>Discover my projects, skills, and experience in an interactive way</p>

        <div className="book-selection-container">
          <div className="book-option" onClick={() => handleBookSelection('plain')}>
            <div className="book-image-container">
              <img src="/assets/plain-Book-img .png" alt="Plain Book Format" />
              <div className="book-overlay">
                <h3>Plain Book</h3>
                <p>Traditional flip-through book experience</p>
              </div>
            </div>
          </div>

          <div className="book-option" onClick={() => handleBookSelection('3d')}>
            <div className="book-image-container">
              <img src="/assets/3dBook-img.png" alt="3D Book Format" />
              <div className="book-overlay">
                <h3>3D Book</h3>
                <p>Interactive 3D book experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="book-selection-text">
          <p>Click on either book to start exploring!</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
