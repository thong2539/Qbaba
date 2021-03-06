import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EditDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-data',
  templateUrl: 'edit-data.html',
})
export class EditDataPage {

  barbershop = {
    BabberID:"",
    BaberName:"",
    OwnerName:"",
    TelBarber:"",
    Address:""
  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private alertCtrl:AlertController, private httpClient: HttpClient) {
    let bid=this.navParams.get('BabberID');
    let url = "http://localhost:8080/barbershop/" + bid;
    console.log(url)
    this.http.get(url).map(res => res.json()).subscribe(data => {this.barbershop = data}); 
  }
  

  EditDataPage(){
    let bid=this.navParams.get('BabberID');
    let url= "http://localhost:8080/barbershop/"+ bid;
      this.httpClient.post(url,this.barbershop)
      .subscribe(
        res=>{
          this.data =res;
            if(this.data.msg==true){
            this.showAlert("Success","Data Update");
            this.navCtrl.popToRoot();
          }
        }
      );
    }
    //สร้าง Alert Message
    showAlert(msgTitle:string, message:string){
        const alert = this.alertCtrl.create({
          title: msgTitle,
          subTitle: message,
          buttons: ["OK"]
        });
        //show alert
        alert.present();
    }
   
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDataPage');
  }

}
