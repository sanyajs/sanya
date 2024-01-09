import { dev } from "./dev";
import { Service } from "../service/service";
import {
  catchUnhandledRejection,
  checkLocal,
  logger,
  printHelp,
  setNoDeprecation,
  setNodeTitle,
  yParser,
} from "@umijs/utils";
import {
  DEV_COMMAND,
  FRAMEWORK_NAME,
  MIN_NODE_VERSION,
} from "../constants";

catchUnhandledRejection();

const ver = parseInt(process.version.slice(1));

export function checkNodeVersion(minVersion: number, message?: string) {
  if (ver < minVersion) {
    logger.error(
      message ||
        `Your node version ${ver} is not supported, please upgrade to ${minVersion}.`
    );
    process.exit(1);
  }
}

export async function run() {
  checkNodeVersion(MIN_NODE_VERSION);
  checkLocal();
  setNodeTitle(FRAMEWORK_NAME);
  setNoDeprecation();

  const args = yParser(process.argv.slice(2), {
    alias: {
      version: ["v"],
      help: ["h"],
    },
    boolean: ["version"],
  });

  const command = args._[0];

  if ([DEV_COMMAND, "setup"].includes(command)) {
    process.env.NODE_ENV = "development";
  } else if (command === "build") {
    process.env.NODE_ENV = "production";
  }

  switch (command) {
    case DEV_COMMAND:
      dev();
      break;
    case "version":
    case "v":
      console.log(`${FRAMEWORK_NAME}@${require("../package.json").version}`);
      break;
    default:
      try {
        await new Service().run2({
          name: command,
          args,
        });
      } catch (e: any) {
        logger.error(e);
        printHelp.exit();
        process.exit(1);
      }
  }
}
