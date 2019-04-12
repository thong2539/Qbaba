import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';
import {HttpClient} from '@angular/common/http';
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newbarber',
  templateUrl: 'newbarber.html',
})
export class NewbarberPage {
  barbershop = {
    BabberID:"",
    BaberName:"",
    OwnerName:"",
    TelBarber:"",
    Address:""

  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient,private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewbarberPage');
  }
  //การใช์ ionic HttpNative
  addbarber(){
    let url= "http://localhost:8080/barbershop";
    this.http.post(url,this.barbershop)
      .subscribe(
        res=>{
          this.data =res;
          if(this.data.msg==true){
            this.showAlert("Success","Data added");
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

    

}
