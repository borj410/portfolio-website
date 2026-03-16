import { createContext, useContext } from "react";

const ProjectProcessContext = createContext({
    toggleProcess: () => {}
});

export function ProjectProcessProvider({ value, children }) {
    return (
        <ProjectProcessContext.Provider value={value}>
            {children}
        </ProjectProcessContext.Provider>
    );
}

export function useProjectProcess() {
    return useContext(ProjectProcessContext);
}
