import { Component } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sendS = true;

  constructor(private sms: SMS) { }

  send() {
    this.sendS = false;
    this.sms.send('+8801820989992', 'Hello world!');
  }

}
