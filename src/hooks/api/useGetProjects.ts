import useAsync from "../useAsync";

import * as projectsApi from "../../services/projects-api";

export default function useGetProjects() {
  const {
    data: projects,
    loading: getProjectsLoading,
    error: getProjectsError,
    act: getProjects,
  } = useAsync(projectsApi.getProjects, false);

  return {
    projects,
    getProjectsLoading,
    getProjectsError,
    getProjects,
  };
}