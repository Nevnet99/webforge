import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			className={clsx(
				"bg-primary text-white dark:bg-primary-dark dark:text-white px-4 py-2 rounded-md cursor-pointer",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};
