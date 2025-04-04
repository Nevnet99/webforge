import React from "react";
import { IProject } from "@/app/types/Project";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: IProject }) => {
	const { id, name, description, deployed, createdAt, updatedAt, status, url } =
		project;

	return (
		<article className="relative flex flex-row justify-between items-center gap-4 bg-surface dark:bg-surface-dark rounded-md p-4">
			<div className=" flex flex-col gap-2">
				<Link className="after:absolute after:inset-0" href={`/projects/${id}`}>
					<h2 className="text-2xl font-bold">{name}</h2>
				</Link>
			</div>
			<div className="relative flex flex-col gap-2 ">
				<p className="text-sm text-gray-500">{status}</p>
			</div>
		</article>
	);
};
