export interface Service {
    id: string;
    title: string;
    description: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
}

export interface Tool {
    id: string;
    name: string;
    description: string;
    link: string;
}

export interface Workspace {
    id: string;
    name: string;
    description: string;
    tools: Tool[];
}

export interface About {
    vision: string;
    mission: string;
    objectives: string[];
    values: string[];
}