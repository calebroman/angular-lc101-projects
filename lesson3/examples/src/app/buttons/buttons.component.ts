import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   buttonOnOff: boolean[] = [true, true, true]

   constructor() { }

   ngOnInit() { }

   activateButton() {
      for (let i=0;i < this.buttonOnOff.length; i++) {
         this.buttonOnOff[i] = true;
      }
   }
}
