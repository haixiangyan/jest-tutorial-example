"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getSearchObj_1 = __importDefault(require("utils/getSearchObj"));
describe('getSearchObj', () => {
    it('可以获取当前网址的查询参数对象', () => {
        global.jsdom.reconfigure({
            url: "https://www.baidu.com?a=1&b=2"
        });
        expect(window.location.search).toEqual('?a=1&b=2');
        expect((0, getSearchObj_1.default)()).toEqual({
            a: '1',
            b: '2',
        });
    });
    it('空参数返回空', () => {
        global.jsdom.reconfigure({
            url: 'https://www.baidu.com'
        });
        expect(window.location.search).toEqual('');
        expect((0, getSearchObj_1.default)()).toEqual({});
    });
});
