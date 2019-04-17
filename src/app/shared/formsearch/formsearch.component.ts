import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsearch',
  templateUrl: './formsearch.component.html',
  styleUrls: ['./formsearch.component.css']
})
export class FormsearchComponent implements OnInit {

  tipo: any [] = [
    {id: 1, name: 'Apartamento'},
    {id: 2, name: 'Casa'},
    {id: 3, name: 'Solar'},
    {id: 4, name: 'Villa'},
    {id: 5, name: 'Nave Industrial'}
  ];

  banos: any [] = [1,2,3,4, "+"];
  constructor() { }

  ngOnInit() {
  }

}
