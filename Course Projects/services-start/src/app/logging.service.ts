// import {Injectable} from '@angular/core';
// @Injectable()                     Not Mandatory, but in future versions it should be done
export class LoggingService {
  logStatusChanged(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
