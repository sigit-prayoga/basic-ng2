import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  logMe(msg: any) {
    console.log('I am logging your message: ', msg);
  }

}

