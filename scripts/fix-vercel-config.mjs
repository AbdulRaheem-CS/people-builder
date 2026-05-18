import { readFile, writeFile } from "node:fs/promises";

const configPath = new URL("../.vercel/output/config.json", import.meta.url);

async function main() {
  let raw;
  try {
    raw = await readFile(configPath, "utf8");
  } catch {
    return;
  }

  let config;
  try {
    config = JSON.parse(raw);
  } catch {
    return;
  }

  if (!config || !Array.isArray(config.routes)) return;

  let changed = false;
  config.routes = config.routes.map((route) => {
    if (!route || typeof route !== "object") return route;
    if (route.headers && route.src && !route.dest && !route.handle) {
      if (route.continue !== true) {
        changed = true;
        return { ...route, continue: true };
      }
    }
    return route;
  });

  if (changed) {
    await writeFile(configPath, JSON.stringify(config, null, 2));
  }
}

main();
