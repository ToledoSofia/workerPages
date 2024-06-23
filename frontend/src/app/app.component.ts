import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ message: string }>('/api/hello')
      .subscribe(response => {
        this.message = response.message;
      });
  }
}
