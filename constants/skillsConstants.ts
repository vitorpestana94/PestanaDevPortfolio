import { IconName } from "@/components/icons/Icons";

const backend: IconName[] = ["dotnet", "csharp", "python", "aspnet", "node", "dapper", "entity"];
const frontend: IconName[] = ["next", "tailwind", "react", "typescript", "js", "html", "css", "bootstrap"]
const database: IconName[] = ["sql", "sqlServer", "mariadb", "mysql", "postgresql"];
const tools: IconName[] = ["git", "claude", "visualstudio", "vscode", "gitHub", "bitbucket"];

export const skillPerLabel: { [key: string]: string } = {
   dotnet: ".NET",
   csharp: "C#",
   sql: "SQL",
   sqlServer: "Microsoft\nSQL Server",
   mariadb: "Maria DB",
   next: "Next.js",
   tailwind: "Tailwind CSS",
   react: "React",
   typescript: "Typescript",
   js: "JavaScript",
   html: "HTML",
   css: "CSS",
   python: "Python",
   bootstrap: "Bootstrap",
   git: "Git",
   aspnet: "ASP.NET",
   node: "Node.js",
   entity: "Entity Framework",
   mysql: "MySQL",
   postgresql: "PostgreSQL",
   vscode: "VS Code",
   visualstudio: "Visual Studio"
};

export const skills: IconName[] = [...database, ...frontend, ...backend, ...tools];

export const databaseSkills = {
   [database[0]]: 95, // sql
   [database[1]]: 93, // sqlServer
   [database[3]]: 82, // mysql
   [database[2]]: 82, // mariadb
   [database[4]]: 75, // postgresql
}

export const backendSkills = {
   [backend[1]]: 95, // csharp
   [backend[0]]: 95, // dotnet
   [backend[3]]: 95, // aspnet
   [backend[5]]: 93, // dapper
   [backend[6]]: 90, // entity
   [backend[2]]: 71, // python
   [backend[4]]: 53, // node
};

export const frontendSkills = {
   [frontend[0]]: 95, // next
   [frontend[3]]: 93, // typescript
   [frontend[4]]: 93, // js
   [frontend[1]]: 90, // tailwind
   [frontend[2]]: 90, // react
   [frontend[7]]: 72, // bootstrap
};

export const toolsSkills = {
   [tools[0]]: 95, // git
   [tools[2]]: 93, // visualstudio
   [tools[4]]: 92, // gitHub
   [tools[5]]: 92, // bitbucket
   [tools[1]]: 90, // claude
   [tools[3]]: 81, // vscode
};