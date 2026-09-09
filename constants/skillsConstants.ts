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
};

export const skills: IconName[][] = [
   // Backend
   ["dotnet", "csharp", "python"],

   // Database
   ["sql", "sqlServer", "mariadb"],

   // Frontend
   ["next", "tailwind", "react", "typescript", "js", "html", "css", "bootstrap"],

   // Tools
   ["git", "claude"],
];

export const databaseSkills = {
   [skills[1][0]]: 90,
   [skills[1][1]]: 88,
   [skills[1][2]]: 85,
}

export const backendSkills = {
   [skills[0][0]]: 90,
   [skills[0][1]]: 88,
   [skills[0][2]]: 85,
};

export const frontendSkills = {
   [skills[2][0]]: 95,
   [skills[2][1]]: 88,
   [skills[2][2]]: 93,
   [skills[2][3]]: 95,
   [skills[2][4]]: 92,
   [skills[2][7]]: 82,
};

export const toolsSkills = {
   [skills[3][0]]: 92,
   [skills[3][1]]: 85,
};