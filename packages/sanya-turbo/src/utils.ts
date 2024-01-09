import spawn from '@umijs/utils/compiled/cross-spawn';
import * as logger from '@umijs/utils/dist/logger';
import type { SpawnSyncOptions } from 'child_process';

export function spawnSync(cmd: string, opts: SpawnSyncOptions) {
  const result = spawn.sync(cmd, {
    shell: true,
    stdio: 'inherit',
    ...opts,
  });
  if (result.status !== 0) {
    logger.error(`Execute command error (${cmd})`);
    process.exit(1);
  }
  return result;
}