export default class User {
  constructor(obj){
    let src = obj || {};
    this.id = obj.id || undefined;
    this.name = obj.name || undefined;
  }
}
