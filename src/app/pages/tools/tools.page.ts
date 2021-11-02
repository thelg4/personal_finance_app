import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadTVM()  {
    this.router.navigate(['/tvm-calculator']);
  }

  loadLoanCalc()  {
    this.router.navigate(['/loan-calculator']);
  }

}
