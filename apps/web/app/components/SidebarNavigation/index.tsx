import React from "react";
import { links } from "../../consts/links";
import Link from "next/link";

export const SidebarNavigation = () => {
	return (
		<nav className="w-full h-full bg-surface dark:bg-surface-dark">
			<div className="relative flex items-center justify-center py-8 border-b border-border dark:border-border-dark">
				<Link
					className="after:absolute after:inset-0 after:content-['']"
					href="/"
				>
					<h2 className="text-2xl font-bold">
						Web
						<span className="text-primary dark:text-primary-dark">forge</span>
					</h2>
				</Link>
			</div>

			<ul className="flex flex-col h-full bg-surface-alt dark:bg-surface-alt-dark pt-4">
				{links.map((link) => (
					<li
						key={link.href}
						className="relative border-b border-border dark:border-border-dark px-4 py-4"
					>
						<Link
							className="underline underline-offset-4 after:absolute after:inset-0 after:content-[''] visited:text-primary dark:visited:text-primary-dark"
							href={link.href}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
