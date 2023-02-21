export const gitCommands = {};

gitCommands.status = async path => {
	await execa('cd', [`${process.cwd()}`]);
	const {stdout} = await execa('git', [`status`]);
	console.info(`current directory ${process.cwd()}`);
	return stdout;
};

gitCommands.commit = async comment => {
	if (comment) {
		await gitCommands.status();
		await execa('git', [`add`, `.`]);
		const {stdout} = await execa('git', [`commit`, `-m`, `${comment}`]);
		return stdout;
	} else {
		alert({
			type: 'warning',
			name: `Warning`,
			msg: `\n We need commit params ${dim(`git commit -m $comments`)}.`
		});
	}
};

gitCommands.push = async comment => {
	if (comment) {
		await gitCommands.commit(comment);
		const out = await execa('git', [`commit`, `-m`, `${comment}`]);
		console.info(out.stdout);
	} else {
		const status = await gitCommands.status();
		const lines = status.split('\n');
		const part = lines[0].split(' ');
		const branch = part[2];
		console.log('branch|', branch);
		// const process = spawn('git', ['branch']);
		// process.stdout.on('data', function (msg) {
		// 	console.log('Salida==>');
		// 	console.log(msg.toString());
		// });
		// process.stderr.on('data', data => {
		// 	console.error(`stderr: ${data}`);
		// });
		// const branch = await execa('git', [
		// 	`branch`,
		// 	`|`,
		// 	`grep`,
		// 	`\\*`,
		// 	`|`,
		// 	`cut`,
		// 	`-d`,
		// 	`' '`,
		// 	`-f2`
		// ]);
		const {stdout} = await execa('git', [`push`, `origin`, `${branch}`]);
		return stdout;
	}
};

gitCommands.all = async comment => {
	if (comment) {
		await gitCommands.commit(comment);
		const out = await execa('git', [`commit`, `-m`, `${comment}`]);
		console.info(out.stdout);
	} else {
		alert({
			type: 'warning',
			name: `Warning`,
			msg: `\n We need commit params ${dim(`git commit -m $comments`)}.`
		});
	}
};
