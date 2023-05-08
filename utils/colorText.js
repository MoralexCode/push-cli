// import './global.js';
export const colorText = text => {
	const word = getModified(text);
	word.forEach(element => {
		console.log(element);
	});
};

function getModified(text) {
	const lines = text.split('\n');
	let result = lines.map(line => {
		if (line.includes('modified')) return red(line);
		if (line.includes('deleted')) return red(line);
		if (line.includes('Untracked files')) return yellow(line);
		return line;
	});
	// console.log(line);
	return result;
}
// const text = `On branch main
//  Your branch is up to date with 'origin/main'.

//  Changes not staged for commit:
//    (use "git add <file>..." to update what will be committed)
//    (use "git restore <file>..." to discard changes in working directory)
//          modified:   utils/commands.js

//  no changes added to commit (use "git add" and/or "git commit -a")`;
// colorText(text);
