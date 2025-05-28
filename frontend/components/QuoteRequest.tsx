import { useState } from "react";
import { Button } from "./ui/button";

export default function QuoteRequest() {
  const [quoteRequested, setQuoteRequested] = useState(false);

  const requestQuote = async () => {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city: "San Francisco" }),
    });

    if (res.ok) setQuoteRequested(true);
  };

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-4">Professional Moving Company in San Francisco</h2>
      <p className="text-lg mb-4">
        We provide local and long-distance moving services with care, precision and professionalism. Whether you're moving your home or office, we make it stress-free.
      </p>
      <Button onClick={requestQuote}>
        {quoteRequested ? "Quote Requested!" : "Request a Free Quote"}
      </Button>
    </section>
  );
}
