import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent{
  serverId = 42;
  serverName: string = 'Krazy Server';

  newServer = false;

  constructor() {
    setTimeout(() => {
      this.newServer = true;
    }, 3000);
  }

  updateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerType = () => {
    return "Terzo type!"
  }
}
