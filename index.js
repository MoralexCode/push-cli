#!/usr/bin/env node
import meow from 'meow';
import {gitCommands} from './utils/commands.js';
import {debug} from './utils/debug.js';
import './utils/global.js';
import {helperText, options} from './utils/helper.js';
import {welcome} from './utils/welcome.js';
welcome();
const cli = meow(helperText, options);
const input = cli.input;
const flags = cli.flags;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
(async () => {
	input.includes('help') && cli.showHelp(0);
	const {status, commit, push} = flags;
	console.log('flags|', flags);
	// console.log('status|', status);
	if (input.includes('status') || status) {
		const spinner = ora('get status...\n').start();
		console.info(await gitCommands.status());
		spinner.succeed(`Status It's done!`);
	}
	if (input.includes('commit') || commit) {
		console.log(input);
		const [, comments] = input;
		console.log(' ❯ comments:', comments);
		const spinner = ora(`Doing commit`).start();
		console.info(await gitCommands.commit(comments));
		spinner.succeed(`Commit it´s Done!`);
	}
	if (input.includes('push') || push) {
		console.log(input);
		const [, comments] = input;
		const spinner = ora(`Doing Push`).start();
		let out = 'Done';
		// TODO: check when there are issues to doing push
		comments ? gitCommands.push(comments) : gitCommands.push();
		spinner.succeed(`Push it´s ${out}!`);
	}
	if (input.includes('undo') || commit) {
		const spinner = ora(`Undo commit`).start();
		console.info(await gitCommands.undo());
		spinner.succeed(`Undo it´s Done!`);
	}
	//Debug info if nedeed.
	debug(flags.debug, input, flags);
})();
