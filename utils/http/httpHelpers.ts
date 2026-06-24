export const hasJson = (res: Response) =>
   res.headers.get("content-type")?.includes("application/json") ?? false;

export async function getErrorMessage(hasJson: boolean, res: Response) {
   const error = hasJson
      ? await res.json().catch(() => null)
      : await res.text().catch(() => null);

   return error?.message ?? error ?? "Request failed";
}
