import User from './entities/User';

class UserStorage {

  constructor(connectionString){
    this.connectionString = connectionString;
  }

  find(id){
    return new Promise((resolve, reject) => {
      resolve(new User({
        id: 'newid',
        name: 'somename'
      }));
    });
  }
}

var instance = new UserStorage();
export default instance;
