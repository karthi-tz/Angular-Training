import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appStatus = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve('stable')
      }, 2000);
    }
  );

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'critical',
      started: new Date(21, 3, 2001)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 12, 2000)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(21, 1, 2001)
    }
  ];

  filteredStatus = '';

  addServer() {
    this.servers.push({
      instanceType: 'medium',
      name: 'Krazy Server',
      status: 'critical',
      started: new Date(21, 3, 2001)
    });
  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
