import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page2Page } from '../page2/page2';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  goToPage2(){
    this.navCtrl.push( Page2Page );
  }

}
