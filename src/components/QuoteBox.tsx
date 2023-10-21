import { useState, useEffect } from "react";
import Button from "./Button";
import { FaQuoteLeft, FaTwitter, FaFacebookF } from "react-icons/fa";
import { QuoteBoxProps } from "../interfaces/QuoteBoxProps";

function QuoteBox({ PQuotes }: QuoteBoxProps) {
    const [Author, setAuthor] = useState<string>("");
    const [Quote, setQuote] = useState<string>("");
    useEffect(() => {
    handleClick()
    }, [])
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * PQuotes.length);
        setQuote(PQuotes[randomIndex].quote);
        setAuthor(PQuotes[randomIndex].author);
    };
	return (
		<div className="quote-box bg-white flex flex-col w-[40rem] p-5">
			<div id="text" className="text-3xl flex justify-center ">
				<FaQuoteLeft className="text-4xl" />
				<div className="ml-2">{Quote}</div>
			</div>
			<div id="author" className="p-7 text-end pr-6">
				- {Author}
			</div>
			<div className="flex justify-between p-4">
				<div className="space-x-3 text-xl">
					<Button>
						<FaTwitter />
					</Button>
					<Button>
						<FaFacebookF />
					</Button>
				</div>
				<Button onClick={handleClick}>Next quote</Button>
			</div>
		</div>
	);
}
export default QuoteBox;
