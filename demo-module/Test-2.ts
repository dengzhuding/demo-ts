// 动态加载
import {StringValidation} from './Validation'
import {LettersOnlyValidator} from './LettersOnlyValidator'
import * as Zip from './ZipCodeValidator'


let startVerify: StringValidation;
startVerify = new LettersOnlyValidator();

const start: (s: string) => boolean = function (str) {
    return str === 'hello'
}