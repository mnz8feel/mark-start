// from umi-fabric umi
// Invoked on the commit-msg git hook by yorkie.

import fs from 'fs';
import chalk from 'chalk';

const msgPath = process.env.GIT_PARAMS || process.env.HUSKY_GIT_PARAMS;
const msg = fs.readFileSync(msgPath, 'utf-8').trim();
chalk.level = 3;

const commitRE = /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release|dep|example|Merge)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
      chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`) +
      `    ${chalk.green(`[revert: ?]<type>[(scope)?]: <message>`)}\n` +
      `    ${chalk.green(`feat(bundler-webpack): add 'comments' option`)}\n` +
      `    ${chalk.green(`fix(core): handle events on blur (close #28)`)}\n\n` +
      chalk.red(`  See https://github.com/umijs/umi/blob/master/.github/commit-convention.md\n`),
  );
  process.exit(1);
}

export default () => {};
