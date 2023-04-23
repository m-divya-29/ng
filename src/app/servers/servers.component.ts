import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server created.';
  serverName: string = '';
  
  constructor() {
    //this calls the callback after 2seconds, which sets variable = true
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created successfully!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; //<HTMLInputElement> because it is not known during complie time.
  }
}
