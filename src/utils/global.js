// 'use strict';
import boxen from 'boxen';
import chalk from 'chalk';
import alert from 'cli-alerts';
import {execa} from 'execa';
import ora from 'ora';
import path from 'path';
export const {green, cyan, yellow, dim, bold} = chalk;
// import path from 'path';
// const currerdir = path.dirname(new URL(import.meta.url).pathname);
global.green = green;
global.cyan = cyan;
global.yellow = yellow;
global.dim = dim;
global.bold = bold;
global.boxen = boxen;
global.ora = ora;
global.execa = execa;
global.path = path;
global.alert = alert;
// global.currerdir = currerdir;
