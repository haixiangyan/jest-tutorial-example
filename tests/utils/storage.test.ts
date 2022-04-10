import storage from "utils/storage";

describe('storage', () => {
  it('可以缓存值', () => {
    storage.set('newKey', 'hello');
    expect(localStorage.getItem('my-app-newKey')).toEqual('hello');
  });

  it('可以设置值', () => {
    localStorage.setItem('my-app-newKye', 'hello');
    expect(storage.get('newKey')).toEqual('hello');
  })
});
