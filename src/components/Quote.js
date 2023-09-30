import React from "react";
import quotesJson from "../assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotesJson.length);
  const randomQuote = quotesJson[randomNumber];
  const quoteText = document.getElementById("text");
  const authorText = document.getElementById("author");
  quoteText.innerHTML = `"${randomQuote.quote}"`;
  authorText.innerHTML = `-${randomQuote.author}`;
}

export default function QuoteBox() {
  return (
    <div className="background">
      <div id="quote-box">
        <div id="quote-content">
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }}></FaQuoteLeft>
          <h2 id="text">quote</h2>
          <FaQuoteRight size="30" style={{ marginLeft: "10px" }}></FaQuoteRight>
          <h4 id="author">author</h4>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_blank"
            style={{ backgroundColor: "#1da1f2", marginRight: "10px" }}
          >
            <FaTwitter style={{color:"white"}}></FaTwitter>
          </a>
          <button
            id="new-quote"
            className="fs-6 fw-bold"
            onClick={getRandomQuote}
          >
            get quote
          </button>
        </div>
      </div>
    </div>
  );
}
