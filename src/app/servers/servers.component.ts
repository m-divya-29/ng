import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  allowNewServer = false;
  
  constructor() {
    //this calls the callback after 2seconds, which sets variable = true
    setTimeout(() => this.allowNewServer = true, 2000);
  }
}
