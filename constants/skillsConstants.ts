import { IconName } from "@/components/icons/Icons";

export const skillPerLabel: { [key: string]: string } = {
   dotnet: ".NET",
   csharp: "C#",
   sql: "SQL",
   sqlServer: "Microsoft\nSQL Server",
   mariadb: "Maria DB",
   next: "Next.js",
   tailwind: "Tailwind CSS",
   react: "React\n&\nReact Native",
   typescript: "Typescript",
   js: "JavaScript",
   html: "HTML",
   css: "CSS",
   python: "Python",
   bootstrap: "Bootstrap",
   git: "Git",
};

export const skills: IconName[][] = [
   // Backend
   ["dotnet", "csharp", "sql", "sqlServer", "mariadb", "python"],

   // Frontend
   ["next", "tailwind", "react", "typescript", "js", "html", "css", "bootstrap"],

   // Tools
   ["git", "claude"],
];

export const backendSkills = {
   [skills[0][0]]: 90,
   [skills[0][1]]: 88,
   [skills[0][2]]: 85,
   [skills[0][3]]: 92,
   [skills[0][4]]: 78,
   [skills[0][5]]: 80,
};

export const frontendSkills = {
   [skills[1][0]]: 95,
   [skills[1][1]]: 88,
   [skills[1][2]]: 93,
   [skills[1][3]]: 95,
   [skills[1][4]]: 92,
   [skills[1][5]]: 90,
   [skills[1][6]]: 88,
   [skills[1][7]]: 82,
};

export const toolsSkills = {
   [skills[2][0]]: 92,
   [skills[2][1]]: 85,
};