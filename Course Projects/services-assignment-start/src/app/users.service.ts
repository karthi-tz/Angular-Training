import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
  }

  setInactive(id: number) {
    this.counterService.incrementActiveToInactiveCounter();
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setActive(id: number) {
    this.counterService.incrementInactiveToActiveCounter();
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
