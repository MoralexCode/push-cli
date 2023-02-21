import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
export const gitCommands = {};

gitCommands.status = async () => {
	await execa('cd', [`${__dirname}`]);
	const out = await execa('git', [`status`]);
	console.info(`current directory ${__dirname}`);
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
