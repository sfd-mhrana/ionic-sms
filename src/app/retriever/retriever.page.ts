import { Component } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';

@Component({
  selector: 'app-retriever',
  templateUrl: 'retriever.page.html',
  styleUrls: ['retriever.page.scss'],
})
export class RetrieverPage {

  sendS = true;

  constructor(private sms: SMS) { }

  send() {
    this.sendS = false;
    this.sms.send('+8801820989992', 'Hello world!');
  }

}
