import { useState } from "react";
import "./NewQuote.css";

function NewQuote(props) {
  const [quoteText, setQuoteText] = useState("");
  const [author, setAuthor] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    if (quoteText.trim() === "") {
      return;
    }

    props.onAddQuote(quoteText, author);

    setQuoteText("");
    setAuthor("");
    setIsOpen(false);
  }

  return (
    <div className="new-quote">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Add Quote"}
      </button>

      {isOpen && (
        <form onSubmit={submitHandler}>
          <textarea
            placeholder="Enter quote..."
            value={quoteText}
            onChange={(e) => setQuoteText(e.target.value)}
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default NewQuote;
