import { ReactNode, createContext, useEffect, useState } from "react";

import { Project } from "../constants/types";
import useGetProjects from "../hooks/api/useGetProjects";

interface ProjectsContextProps {
  frontEndProjects: Project[];
  backEndProjects: Project[];
  projectsLoading: boolean;
  projectsError: Error | null;
}

export const ProjectsContext = createContext<ProjectsContextProps>({
  frontEndProjects: [],
  backEndProjects: [],
  projectsLoading: false,
  projectsError: null,
});

export default function ProjectsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [frontEndProjects, setFrontEndProjects] = useState<Project[]>([]);
  const [backEndProjects, setBackEndProjects] = useState<Project[]>([]);

  const { projects, getProjects, getProjectsError, getProjectsLoading } =
    useGetProjects();

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  useEffect(() => {
    if (projects) {
      const frontEnd = projects.filter(
        (project: Project) => project.type === "FRONTEND"
      );
      const backEnd = projects.filter(
        (project: Project) => project.type === "BACKEND"
      );

      setFrontEndProjects(frontEnd);
      setBackEndProjects(backEnd);
    }
  }, [projects]);

  return (
    <ProjectsContext.Provider
      value={{
        frontEndProjects,
        backEndProjects,
        projectsError: getProjectsError,
        projectsLoading: getProjectsLoading,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
