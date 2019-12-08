import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  data: Object = {}
  response: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/posts')
      .subscribe((response) =>{
        this.response = response;
        console.log(response);
      });
  }
}
