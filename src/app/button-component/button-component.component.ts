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
  counter = 0;
  buttonClicks = [];
  onDisplayDetails(){
    this.hideData = !this.hideData;
    this.counter ++;
    this.buttonClicks.push(this.counter)
    console.log(this.hideData)
  }
}
