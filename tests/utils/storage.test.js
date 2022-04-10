"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __importDefault(require("utils/storage"));
describe('storage', () => {
    it('可以缓存值', () => {
        storage_1.default.set('newKey', 'hello');
        expect(localStorage.getItem('my-app-newKey')).toEqual('hello');
    });
    it('可以设置值', () => {
        localStorage.setItem('my-app-newKye', 'hello');
        expect(storage_1.default.get('newKey')).toEqual('hello');
    });
});
