#!/usr/bin/env node
const { spawnSync } = require("child_process");
async function npmLint() {
  const spawnOption = {
    shell: true,
    env: process.env,
    stdio: "inherit",
    cwd: "./website",
  };
  let npmInstall;
  let npmRunLint;
  try {
    npmInstall = await spawnSync("npm", ["ci", "--ignore-scripts", "--no-audit"], spawnOption);
    if (npmInstall.status !== 0) {
      process.exit(npmInstall.status ?? 1);
    }
    npmRunLint = await spawnSync("npm", ["run lint"], spawnOption);
    process.exit(npmRunLint.status ?? 1);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
npmLint();
