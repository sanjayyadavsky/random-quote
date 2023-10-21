import { useState, useEffect } from "react";
import QuoteBox from "./components/QuoteBox";
import { QuoteResponse } from "./interfaces/QuoteResponse";
function App() {
	const [Quotes, setQuotes] = useState<QuoteResponse[]>([]);
	useEffect(() => {
		fetchQuotes();
	}, []);
	async function fetchQuotes() {
		const response = await fetch(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
		);
		const data = await response.json();
		setQuotes(data.quotes);
	}
	return (
		<div className="wrapper bg-green-400 h-screen flex justify-center items-center">
			{Quotes.length==0?<div>Loading..</div>:<QuoteBox PQuotes={Quotes} />}
		</div>
	);
}

export default App;
