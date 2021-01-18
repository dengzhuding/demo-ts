import {StringValidation} from './Validation';

const numberRegexp = /^\d+$/
export class ZipCodeValidator implements StringValidation {
    isAcceptable (s: string) {
        return numberRegexp.test(s)
    }
}