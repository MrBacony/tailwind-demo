import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schnitzel',
  templateUrl: './schnitzel.component.html',
  styleUrls: ['./schnitzel.component.css']
})
export class SchnitzelComponent implements OnInit {

  @Input()
  name: string = 'Schnitzel';

  @Input()
  url!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
