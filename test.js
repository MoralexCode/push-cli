import test from 'ava';
import {execa} from 'execa';

test('Get Status with command', async t => {
	const {stdout} = await execa('p', [`status`]);
	let hasStatu = stdout ? true : false;
	t.is(hasStatu, true);
});
test('Get Status with flag', async t => {
	const {stdout} = await execa('p', [`-s`]);
	let hasStatu = stdout ? true : false;
	t.is(hasStatu, true);
});
