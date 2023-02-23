import {config} from 'dotenv';
config();
const {firm} = process.env;
export const gitCommands = {};
gitCommands.status = async path => {
	await execa('cd', [`${process.cwd()}`]);
	const {stdout} = await execa('git', [`status`]);
	// console.info(`current directory ${process.cwd()}`);
	return stdout;
};

gitCommands.commit = async comment => {
	if (comment) {
		await gitCommands.status();
		await execa('git', [`add`, `.`]);
		const {stdout} = await execa('git', [`commit`, `-m`, `${comment} ${firm || '❯ '}`]);
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
	const branch = await getCurrentBranch();
	if (comment) {
		await gitCommands.commit(comment);
		return push(branch);
	} else {
		return push(branch);
	}
};
gitCommands.undo = async comment => {
	await execa('git', [`reset`, `--soft`, `HEAD~1`]);
	// TODO: show the las commit hash
};

async function push(branch) {
	const {stdout} = await execa('git', [`push`, `origin`, `${branch}`]);
	return stdout;
}
async function getCurrentBranch() {
	const status = await gitCommands.status();
	const lines = status.split('\n');
	const part = lines[0].split(' ');
	return part[2];
}
