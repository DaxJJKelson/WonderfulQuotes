import { useState } from "react";
import Quotes from "./components/Quotes/Quotes";
import NewQuote from "./components/NewQuote/NewQuote";

function App() {
  const [quotes, setQuotes] = useState([]);

  function addQuoteHandler(quoteText, author) {
    const newQuote = {
      text: quoteText,
      author: author || "Anonymous",
      date: new Date().toLocaleDateString(),
    };

    setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
  }
  return (
    <div>
      <h1>Quote Board</h1>
      <NewQuote onAddQuote={addQuoteHandler} />
      <Quotes quotes={quotes} />
    </div>
  );
}

export default App;
