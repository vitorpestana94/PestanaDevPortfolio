import { IconName } from "@/components/icons/Icons";

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

export const skills: IconName[][] = [
   // Backend
   ["dotnet", "csharp", "python", "aspnet", "node", "dapper", "entity"],

   // Database
   ["sql", "sqlServer", "mariadb", "mysql", "postgresql"],

   // Frontend
   ["next", "tailwind", "react", "typescript", "js", "html", "css", "bootstrap"],

   // Tools
   ["git", "claude", "visualstudio", "vscode", "gitHub", "bitbucket"],
];

export const databaseSkills = {
   [skills[1][0]]: 95,
   [skills[1][1]]: 93,
   [skills[1][3]]: 82,
   [skills[1][2]]: 82,
   [skills[1][4]]: 75,
}

export const backendSkills = {
   [skills[0][1]]: 95,
   [skills[0][0]]: 95,
   [skills[0][3]]: 95,
   [skills[0][5]]: 93,
   [skills[0][6]]: 90,
   [skills[0][2]]: 71,
   [skills[0][4]]: 53,
};

export const frontendSkills = {
   [skills[2][0]]: 95,
   [skills[2][3]]: 93,
   [skills[2][4]]: 93,
   [skills[2][1]]: 90,
   [skills[2][2]]: 90,
   [skills[2][7]]: 72,
};

export const toolsSkills = {
   [skills[3][0]]: 95,
   [skills[3][2]]: 93,
   [skills[3][4]]: 92,
   [skills[3][5]]: 92,
   [skills[3][1]]: 90,
   [skills[3][3]]: 81,
};