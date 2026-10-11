import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
   resolve: {
      alias: {
         "@components": path.resolve(__dirname, "components"),
         "@utils": path.resolve(__dirname, "utils"),
         "@public": path.resolve(__dirname, "public"),
         "@": path.resolve(__dirname),
      },
   },
   esbuild: {
      jsx: "automatic",
   },
   test: {
      include: ["tests/**/*.test.{ts,tsx}"],
   },
});
