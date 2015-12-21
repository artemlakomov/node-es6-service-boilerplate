import off from '../automock-off';
import userStorage from '../../models/user-storage';

describe("user storage", () => {
  it("should find user", (done) => {
    userStorage.find(25).then(user => {
      expect(user.name).toBe('somename');
      done();
    });
  });
});
