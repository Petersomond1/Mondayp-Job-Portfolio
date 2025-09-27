import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results, onResultClick, isVisible }) => {
  if (!isVisible || results.length === 0) {
    return null;
  }

  const handleResultClick = (result) => {
    // Scroll to the target element
    const targetElement = document.querySelector(result.link);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }

    // If it's a card suit, highlight the specific card
    if (result.cardSuit) {
      highlightCard(result.cardSuit);
    }

    // Call the parent callback to close search
    onResultClick(result);
  };

  const highlightCard = (suit) => {
    // Find cards with the specific suit and add a highlight class
    const cards = document.querySelectorAll(`[data-suit="${suit}"]`);
    cards.forEach(card => {
      card.classList.add('search-highlight');

      // Remove highlight after 3 seconds
      setTimeout(() => {
        card.classList.remove('search-highlight');
      }, 3000);
    });
  };

  const getSuitIcon = (suit) => {
    const suitIcons = {
      hearts: '♥',
      diamonds: '♦',
      clubs: '♣',
      spades: '♠'
    };
    return suitIcons[suit] || '';
  };

  const getSuitColor = (suit) => {
    return suit === 'hearts' || suit === 'diamonds' ? 'red' : 'black';
  };

  return (
    <div className="search-results-dropdown">
      <div className="search-results-header">
        <span>🔍 Search Results ({results.length})</span>
      </div>
      <div className="search-results-list">
        {results.map((result, index) => (
          <div
            key={index}
            className="search-result-item"
            onClick={() => handleResultClick(result)}
          >
            <div className="result-main">
              <div className="result-term">
                {result.cardSuit && (
                  <span
                    className={`suit-icon ${getSuitColor(result.cardSuit)}`}
                  >
                    {getSuitIcon(result.cardSuit)}
                  </span>
                )}
                <strong>{result.term}</strong>
              </div>
              <div className="result-location">
                📍 {result.location}
              </div>
            </div>
            <div className="result-description">
              {result.description}
            </div>
            <div className="result-action">
              <span className="click-hint">Click to navigate →</span>
            </div>
          </div>
        ))}
      </div>
      <div className="search-results-footer">
        <small>💡 Click any result to navigate directly to that section</small>
      </div>
    </div>
  );
};

export default SearchResults;