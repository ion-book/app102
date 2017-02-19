import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

  goToPage2(){
    this.navCtrl.push( Page2Page );
  }

  goToPage3(){
    this.navCtrl.push( Page3Page );
  }

  goToBack(){
    this.navCtrl.pop();
  }

}
