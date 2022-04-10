"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = __importDefault(require("utils/sum"));
describe('sum', () => {
    it('1 + 1 等于 2', () => {
        expect((0, sum_1.default)(1, 1)).toEqual(2);
    });
});
