export const helperText = `
	${bold(`Usage`)}
		${green(`tasksmaster`)} ${yellow(`[options]`)} ${cyan(`<commands>`)}

	${bold(`Options`)}
        
		${yellow(`--debug   Show debug information `)}
		${yellow(`-s , --status`)} show status equivalent to ${dim('git status')} 
		
	${bold(`Commands`)}
		${cyan(`help`)}   			Print CLI help information
		${cyan(`add  <text>`)}   		add new task
		
		${cyan(`status`)}	show status equivalent to ${dim('git status')} 
		${cyan(`s`)}	show status equivalent to ${dim('git status')} 
		${cyan(`commit`)}	show status equivalent to ${dim('git add . & git commit')} 
		${cyan(`push`)}	show status equivalent to ${dim('git add . & git commit')} 
		
	${bold(`Examples`)}
		${green(`taskmastercli`)} ${yellow(`add myTask`)}
		${green(`t`)} ${yellow(`aad  myTask`)}`;

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
		}
	}
};
