import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvm-results',
  templateUrl: './tvm-results.page.html',
  styleUrls: ['./tvm-results.page.scss'],
})
export class TvmResultsPage implements OnInit {

  private pv: number = 0;
  private fv: number = 0;
  private interest: number = 0;
  private payments: number = 0;
  private periods: number = 0;
  

  constructor(private route: ActivatedRoute) { 
    let variables = JSON.parse(this.route.snapshot.paramMap.get('variables'));
    this.pv = variables.presentVal;
    this.fv = variables.futureVal;
    this.interest = variables.interest;
    this.payments = variables.payments;
    this.periods = variables.periods;
  }
  
  ngOnInit() {
  }

  ionViewWillEnter()  {
    
  }
  

}
