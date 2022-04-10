"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strNumSum_1 = __importDefault(require("utils/strNumSum"));
describe('strNumSum', () => {
    it('可以进行字符串数字相加', () => {
        expect((0, strNumSum_1.default)('1', '1')).toEqual(2);
    });
    it('如果 NaN 返回 0', () => {
        expect((0, strNumSum_1.default)('1', 'abc')).toEqual(0);
    });
});
