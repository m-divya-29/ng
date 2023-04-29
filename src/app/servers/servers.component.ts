import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server created.';
  serverName: string = 'Server 01'; //in 2way binding, this works as default value of a html element
  serverCreated = false;
  servers =['Testserver 1', 'Testserver2'];
  constructor() {
    //this calls the callback after 2seconds, which sets variable = true
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server "' + this.serverName + '" created successfully!';
    this.servers.push(this.serverName)
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; //<HTMLInputElement> because it is not known during complie time.
  }
}
