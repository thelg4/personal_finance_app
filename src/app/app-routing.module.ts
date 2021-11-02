import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./pages/tools/tools.module').then( m => m.ToolsPageModule)
  },
  {
    path: 'tvm-calculator',
    loadChildren: () => import('./pages/tvm-calculator/tvm-calculator.module').then( m => m.TvmCalculatorPageModule)
  },
  {
    path: 'loan-calculator',
    loadChildren: () => import('./pages/loan-calculator/loan-calculator.module').then( m => m.LoanCalculatorPageModule)
  },
  {
    path: 'expense-tracker',
    loadChildren: () => import('./pages/expense-tracker/expense-tracker.module').then( m => m.ExpenseTrackerPageModule)
  },
  {
    path: 'new-expense',
    loadChildren: () => import('./pages/new-expense/new-expense.module').then( m => m.NewExpensePageModule)
  },
  {
    path: 'loan-tracker',
    loadChildren: () => import('./pages/loan-tracker/loan-tracker.module').then( m => m.LoanTrackerPageModule)
  },
  {
    path: 'tvm-results/:tvmObject',
    loadChildren: () => import('./pages/tvm-results/tvm-results.module').then( m => m.TvmResultsPageModule)
  },
  {
    path: 'expense-list',
    loadChildren: () => import('./pages/expense-list/expense-list.module').then( m => m.ExpenseListPageModule)
  },
  {
    path: 'loan-list',
    loadChildren: () => import('./pages/loan-list/loan-list.module').then( m => m.LoanListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
