import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-animal',
  templateUrl: './item-animal.component.html',
  styleUrls: ['./item-animal.component.css']
})
export class ItemAnimalComponent implements OnInit {
  @Input() animal: any;
  constructor() { }

  ngOnInit(): void {
  }

}
