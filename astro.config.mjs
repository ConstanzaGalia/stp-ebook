import { defineConfig, passthroughImageService } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://academy.entrenamientostp.com",
  output: "server",
  adapter: vercel(),
  image: {
    // Evita sharp (binario nativo) en la función /_render de Vercel.
    // Esta app no usa <Image /> de Astro; un SIGSEGV ahí tumba el proceso.
    service: passthroughImageService(),
  },
  integrations: [tailwind(), react()],
});
