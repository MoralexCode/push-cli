import clearConsole from 'clear-any-console';

export const welcome = () => {
	clearConsole();

	console.log(
		boxen(` 💻 ${cyan(`Send your commits & push faster Like a Boss`)} 😎 `, {
			tagLine: 'by MoralexCode',
			title: 'Git Commit & Push',
			titleAlignment: 'center',
			borderStyle: 'double'
		})
	);
};
