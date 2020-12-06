import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'security-project';
  selected: number;
  list = []
  value : string;
  ngOnInit() {
    this.selected = 1;
    this.value = ""
  }
  onSelect(value: number){
    this.selected = value;
  }
  update(value: string) {
     this.value = value; 
     this.list.push(this.value)
  }
}
