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
   ["dotnet", "csharp", "sql", "sqlServer", "mariadb"],
   ["next", "tailwind", "react", "typescript"],
   ["js", "html", "css"],
   ["python", "bootstrap"],
   ["git"],
];
