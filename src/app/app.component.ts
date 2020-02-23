import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
 teams = [{name : 'RCB',place : 'Bengaluru'}, 
          {name : 'SRH',place : 'Hyderabad'},
          {name : 'CSK',place : 'Chennai'}]

 players = [{name : 'Virat Kohli',place : 'India'}, 
            {name : 'Kane Williamson',place : 'New Zealand'},
            {name : 'Eoin Morgan',place : 'England'}]

}
