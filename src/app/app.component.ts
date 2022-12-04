import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export interface Title{
  name: string,
  nazwisko: string
}

export class AppComponent {
  stringPropsFromParent = 'string props from parent value'
  title = [{name: 'Rafał', nazwisko: 'Fuz'}, {name: 'Elizabeth', nazwisko: "Olsen"}, {name:'Margot', nazwisko:'Robbie'}]

}
