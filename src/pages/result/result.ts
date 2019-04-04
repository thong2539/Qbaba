import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  barbershop:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let bid=this.navParams.get('ketword');
    let url = "http://localhost:8080/barbershop/name/" + bid;
    console.log(url)
    this.http.get(url).map(res => res.json()).subscribe(data => {this.barbershop = data});
  }
  showDetail(id)
  {
    this.navCtrl.push(DetailPage,{BabberID:id});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}