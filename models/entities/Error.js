export default class Error {
  constructor(err){

    let msg = err ? typeof (err) === 'string' ? err : JSON.stringify(err) :'Unknown error occured';
    if(Array.isArray(err) && err.length){
      msg = err[0];
    }
    if(err.message){
      msg = err.message;
    }

    this.error = msg;
  }
}
