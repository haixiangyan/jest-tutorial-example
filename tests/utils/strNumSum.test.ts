import strNumSum from "utils/strNumSum";

describe('strNumSum', () => {
  it('可以进行字符串数字相加', () => {
    expect(strNumSum('1', '1')).toEqual(2);
  });

  it('如果 NaN 返回 0', () => {
    expect(strNumSum('1', 'abc')).toEqual(0);
  })
});
