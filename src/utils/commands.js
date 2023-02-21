export const gitCommands = {};

gitCommands.status = async path => {
	// await execa('cd', [`${path}`]);
	const out = await execa('git', [`status`]);
	console.info(`current directory ${path}`);
	console.info(`current directory ${process.cwd()}`);
	console.info(out.stdout);
};

gitCommands.commit = async comment => {
	if (comment) {
		await gitCommands.status();
		await execa('git', [`add`, `.`]);
		const out = await execa('git', [`commit`, `-m`, `${comment}`]);
		console.info(out.stdout);
	}
};

gitCommands.push = async comment => {
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
