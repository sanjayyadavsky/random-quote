import React from "react";
interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}
function Button({ children, onClick }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className="rounded bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{children}
		</button>
	);
}

export default Button;
