import { useState } from "react";
import Quotes from "./components/UI/Quotes";
import NewQuote from "./components/NewQuote/NewQuote";

function App() {
  const [quotes, setQuotes] = useState([]);

  function addQuoteHandler(quoteText, author) {
    const newQuote = {
      text: quoteText,
      author: author || "Anonymous", // Default author if none provided
      date: new Date().toLocaleDateString(),
    };

    setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
  }
  function deleteQuoteHandler(indexToDelete) {
    setQuotes((prevQuotes) =>
      prevQuotes.filter((_, index) => index !== indexToDelete),
    );
  }
  return (
    <div>
      <h1>Quote Board</h1>
      <NewQuote onAddQuote={addQuoteHandler} />
      <Quotes quotes={quotes} onDeleteQuote={deleteQuoteHandler} />
    </div>
  );
}

export default App;
