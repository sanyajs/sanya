import { Service as CoreService } from "@umijs/core";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { DEFAULT_CONFIG_FILES, FRAMEWORK_NAME } from "../constants";
import { getCwd } from "umi/dist/service/cwd";

export class Service extends CoreService {
  constructor(opts?: any) {
    process.env.UMI_DIR = dirname(require.resolve("../../package"));
    const cwd = getCwd();
    super({
      ...opts,
      env: process.env.NODE_ENV,
      cwd,
      defaultConfigFiles: opts?.defaultConfigFiles || DEFAULT_CONFIG_FILES,
      frameworkName: opts?.frameworkName || FRAMEWORK_NAME,
      presets: [require.resolve("../preset"), ...(opts?.presets || [])],
      plugins: [
        existsSync(join(cwd, "plugin.ts")) && join(cwd, "plugin.ts"),
        existsSync(join(cwd, "plugin.js")) && join(cwd, "plugin.js"),
      ].filter(Boolean),
    });
  }

  async run2(opts: { name: string; args?: any }) {
    let name = opts.name;
    if (opts?.args.version || name === "v") {
      name = "version";
    } else if (opts?.args.help || !name || name === "h") {
      name = "help";
    }

    // TODO
    // initWebpack

    return await this.run({ ...opts, name });
  }
}
