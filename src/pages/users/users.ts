import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserPage } from '../user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.users.push({
      name: 'Nicolas',
      age: '23',
      avatar: 'http://i.telegraph.co.uk/multimedia/archive/03491/Vladimir_Putin_1_3491835k.jpg'
    });
    this.users.push({
      name: 'Kattya',
      age: '22',
      avatar: 'http://img.timeinc.net/time/daily/2010/1011/poy_nomination_agassi.jpg'
    });
    this.users.push({
      name: 'Andrea',
      age: '24',
      avatar: 'http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg'
    });
  }

  openDetail( user ){
    this.navCtrl.push( UserPage, {
      user: user,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
