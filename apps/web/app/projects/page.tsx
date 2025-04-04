import React from "react";
import { ProjectCard } from "../components/shared/Cards";
import { Button } from "../components/shared/Button";

export const tempProjects = [
	{
		id: 1,
		name: "Project 1",
		description: "Project 1 description",
		deployed: false,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
		status: "ACTIVE",
		url: "https://project1.com",
	},
	{
		id: 2,
		name: "Project 2",
		description: "Project 2 description",
		deployed: true,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
		status: "BUILDING",
		url: "https://project2.com",
	},
	{
		id: 3,
		name: "Project 3",
		description: "Project 3 description",
		deployed: false,
		status: "ERROR",
		url: "https://project3.com",
	},
	{
		id: 4,
		name: "Project 4",
		description: "Project 4 description",
		deployed: true,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
		status: "DRAFT",
		url: "https://project4.com",
	},
];

const Projects = () => {
	return (
		<section className="grid grid-cols-12 w-full py-20 h-fit">
			<h1 className="col-start-2 col-span-10 text-4xl font-bold">Projects</h1>

			<ul className="col-start-2 col-span-10 flex flex-col gap-4 mt-8 mb-4">
				{tempProjects.map((project) => (
					<li key={project.id}>
						<ProjectCard project={project} />
					</li>
				))}
			</ul>
			<Button className="col-start-10 col-span-2 md:col-start-11 md:col-span-1">
				Add new project
			</Button>
		</section>
	);
};

export default Projects;
