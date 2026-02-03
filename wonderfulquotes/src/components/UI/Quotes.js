import "./Quotes.css";

function Quotes(props) {
  return (
    <div className="quotes">
      {props.quotes.map((quote, index) => (
        <div className="quote-card" key={index}>
          <p className="quote-text">"{quote.text}"</p>
          <div className="quote-footer">
            <span>- {quote.author}</span>
            <span>{quote.date}</span>
          </div>
          <button
            className="delete-btn"
            onClick={() => props.onDeleteQuote(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
