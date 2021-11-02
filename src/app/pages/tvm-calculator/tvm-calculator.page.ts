import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-tvm-calculator',
  templateUrl: './tvm-calculator.page.html',
  styleUrls: ['./tvm-calculator.page.scss'],
})
export class TvmCalculatorPage implements OnInit {

  presentValue: number;
  interest: number;
  payment: number;
  periods: number;
  futureValue: number;

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  calculateTVM() {
    
    let futureValue: number = 0;
    let modifiedRate: number = 0;
    
    console.log("Calculating:");
    console.log("Present Value: "+ this.presentValue);
    console.log("Interest: " + this.interest);
    console.log("Additional Payments" + this.payment);
    console.log("Periods: " + this.periods);

    modifiedRate = (1+(this.interest/100))**this.periods;
    futureValue = this.presentValue * modifiedRate;
    this.futureValue = futureValue;

    console.log("Future Value: " + futureValue);


    let variables = {
      presentValue: this.presentValue,
      interest: this.interest,
      payment: this.payment,
      periods: this.periods,
      futureValue: this.futureValue
    };

     let variablesStringify = JSON.stringify(variables);

     this.navCtrl.navigateForward('tvm-results/'+variablesStringify);
  }

  sendToResults() {

      // let futureVal: number = this.calculateTVM()

      // let navExtras: NavigationExtras = {
      //   queryParams:  {
      //     fv: JSON.stringify(futureVal)
      //   }
      // };

      // this.navCtrl.navigateForward(['/tvm-results'], navExtras);

      
  }
}
