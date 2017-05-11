import { Component } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  obj = { hi: 'hi', inside: 'example' }
  // private headers = new Headers({'Content-Type': 'application/json'});
  private headers = new Headers(); //Not working

  constructor(public http: Http) {}

  onClick() {
    this.http.post('/contacts', this.obj, {headers : this.headers})
    // this.http.post('/contacts', this.obj, {headers : this.headers})
      .subscribe((response) => {console.log(response)})
  }

}
