import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.page.html',
  styleUrls: ['./expense-tracker.page.scss'],
})
export class ExpenseTrackerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  addExpense()  {
    this.router.navigate(['/new-expense']);
  }

  viewExpenses()  {
    this.router.navigate(['/expense-list']);
  }
}
