import api from "./api";

export async function getProjects() {
  const response = await api.get("/projects");

  return response.data;
}
