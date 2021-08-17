import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Complete LaunchCode prep work', 'Clean bathroom']},
      {title: "Today's Chores", tasks: ['Erase LaunchCode prep work', 'Dirty Bathroom']},
      {title: "Tomorrow's Chores", tasks: ["Re-write LaunchCode book", "Demolish Bathroom"]},
   ];
   

   constructor() { }

   ngOnInit() {
   }

}
