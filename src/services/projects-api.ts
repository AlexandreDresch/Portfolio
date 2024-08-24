import { api } from "./api";

export async function getProjects() {
  const { data: projects } = await api.from("Project").select();

  return projects;
}
