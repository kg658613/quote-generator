const quoteContainer = document.getElementById('quote-generator');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show New Quote
function newQuote() {
    // Pick a random quote
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if Author field is blank and replace it with "unknown"
    if (!quote-author) {
      authorText.textContent = 'Unknown';
    } else {
      authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 125) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
  }

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

  // On Load
newQuote ();