import path from "path";
import { catchUnhandledRejection, yParser } from "@umijs/utils";
import { spawnSync } from "../utils";

catchUnhandledRejection();

export async function run() {
  const args = yParser(process.argv.slice(2), {
    alias: {
      version: ["v"],
      help: ["h"],
    },
    boolean: ["version"],
  });

  const command = args._[0];

  switch (command) {
    case "dev":
    case "build":
      (async () => {
        const args = process.argv.slice(2);

        // no cache
        if (args.includes("--no-cache")) {
          args.unshift("--force");
        }

        // filter
        if (!args.includes("--filter")) {
          // Tips: should use double quotes, single quotes are not valid on windows.
          args.unshift("--filter", `"./apps/*"`);
        }

        // turbo cache
        if (!args.includes("--cache-dir")) {
          args.unshift("--cache-dir", `".turbo"`);
        }

        const turbo = require.resolve("turbo");
        const command = `${turbo} run ${args.join(" ")}`;

        spawnSync(command, { cwd: path.resolve(".") });
      })();
    default:
  }
}
