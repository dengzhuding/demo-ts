import {StringValidation} from './Validation';

const lettersRegexp = /^\[A-Za-z]+$/
export class LettersOnlyValidator implements StringValidation {
	isAcceptable (s: string) {
		return lettersRegexp.test(s);
	}
}