import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  //see the usage of 'words' in app.component.html
  @Input('name')
  helloTo: String;

  constructor() { }

}
