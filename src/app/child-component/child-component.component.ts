import { Component, Input, OnInit } from '@angular/core';
import {Title} from '../app.component'

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  props = 'zmienna props'
  @Input() inputProps= 'value assigned in Input decorator'
  @Input() arrayProps = []
  @Input() title:Title = []
  @Input() stringPropsFromParent =''

  constructor(){
    console.log(this.inputProps.length)
    console.log(this.props.length)
  }
  ngOnInit(): void {
    console.log(this.inputProps)
    console.log(this.title.length)
    
  }

}
