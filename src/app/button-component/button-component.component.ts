import { Component } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styles: [`
    .whitetxt {
      color: white
    }
  `]
})
export class ButtonComponentComponent {
  hideData = false;
  buttonClicks = [];
  onDisplayDetails(){
    this.hideData = !this.hideData;
    this.buttonClicks.push(new Date())
    console.log(this.hideData)
  }
}
