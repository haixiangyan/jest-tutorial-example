import sum from '../src/sum';

describe('sum', () => {
  it('1 + 1 等于 2', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
