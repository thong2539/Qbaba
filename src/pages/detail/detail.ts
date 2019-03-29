import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  barbershop:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let bid=this.navParams.get('babberID');
    let url = "http://localhost:8080/barbershop/" + bid;
    this.http.get(url)
      .map(res=>res.json())
      .subscribe(data => {
        this.barbershop = data;
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
