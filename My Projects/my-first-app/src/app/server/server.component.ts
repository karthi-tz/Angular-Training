import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
          color: white;
        }
    `]
})

export class ServerComponent{
    serverId = 4200;
    serverName: string = '';
    serverStatus = 'offline';
    serverCreated = false;
    disableBut = false;
    servers = ['server1', 'server2'];

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
      setTimeout(() => {
        this.disableBut = true;
      }, 5000);
    }

    onCreateServer() {
      this.servers.push(this.serverName);
      this.serverCreated = true;
    }

    onUpdateServer(event: Event) {
      // console.log(event.target.value)
      this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
