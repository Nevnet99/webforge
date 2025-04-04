export type TProjectStatus = "ACTIVE" | "BUILDING" | "ERROR" | "DRAFT";

export interface IProject {
	id: number;
	name: string;
	description?: string;
	deployed: boolean;
	createdAt?: string;
	updatedAt?: string;
	status: TProjectStatus;
	url?: string;
}


