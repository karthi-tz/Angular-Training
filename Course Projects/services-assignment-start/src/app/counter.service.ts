export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive Count : ', this.activeToInactiveCounter);
  }

  incrementInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active Count : ', this.inactiveToActiveCounter);
  }
}
