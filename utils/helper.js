export const helperText = `
	${bold(`Usage`)}
		${green(`tasksmaster`)} ${yellow(`[options]`)} ${cyan(`<commands>`)}

	${bold(`Options`)}
        
		${yellow(`--debug   Show debug information `)}
		${yellow(`-s , --status`)} show status equivalent to ${dim('git status')} 
		${yellow(`-p, --push`)}	Doing Pus to remote repository equivalent to:
			 	${dim('git add . && git commit -m $comments && git push origin $BRACH_NAME')} 
		
	${bold(`Commands`)}
		${cyan(`help`)}   			Print CLI help information
		${cyan(`status`)}	show status equivalent to ${dim('git status')} 
		${cyan(`commit`)}	show status equivalent to ${dim('git add . & git commit')} 
		${cyan(`push`)}	Doing Pus to remote repository equivalent to:
				${dim('git add . && git commit -m $comments && git push origin $BRACH_NAME')} 
		${cyan(`undo`)}	Undo commit Pus to remote repository equivalent to:
				${dim('git reset --soft HEAD~1')} 
		
	${bold(`Examples`)}
		${green(`p`)} ${yellow(`-s`)}
		${green(`p`)} ${yellow(`-p 'Initial commit  by  ❯ ❯ MoralexCode 😎 ❮ ❮'`)}`;

export const options = {
	importMeta: import.meta,
	booleanDefault: undefined,
	flags: {
		debug: {
			type: 'boolean',
			default: false
			// alias: 'd'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v'
		},
		status: {
			type: 'boolean',
			default: false,
			alias: 's'
		},
		commit: {
			type: 'boolean',
			default: false,
			alias: 'c'
		},
		push: {
			type: 'boolean',
			default: false,
			alias: 'p'
		}
	}
};
