export function getDeadlineDate(deadline: string): Date {
   return new Date(deadline.endsWith("Z") ? deadline : `${deadline}Z`);
}

export function isOverdue(deadline: string): boolean {
   return getDeadlineDate(deadline) < new Date();
}

export function getDeadlineAsLocaleString(deadline: string, locale: string): string {
   return getDeadlineDate(deadline).toLocaleString(locale, {
      dateStyle: "short",
      timeStyle: "short",
   });
}

export function getDeadlineAsInputValue(deadline: string): string {
   const date = getDeadlineDate(deadline);
   const pad = (value: number) => String(value).padStart(2, "0");

   return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function getDeadlineFromInputValue(inputValue: string): string {
   return new Date(inputValue).toISOString();
}
