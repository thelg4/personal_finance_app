import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Expense } from '../modal/Expense';
import { Loan } from '../modal/Loan';




@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private expenses: Observable<Expense[]>;
  private expenseCollection: AngularFirestoreCollection<Expense>;

  private loans: Observable<Loan[]>;
  private loanCollection: AngularFirestoreCollection<Loan>;


  usertype = "";
  uid = "";
  isOwner: boolean = false;
  showLogin: boolean = true;

  constructor(private afs: AngularFirestore) {
    
  }

  // loadMyExpenses()  {
  //   var user = firebase.auth().currentUser;

  //   if (user == null) {
  //     console.log("no user");
  //     return;
  //   }

  //   console.log("User ID: " + user.uid);
  //   var uid = user.uid;

  //   console.log("User Type: " + this.usertype);

  //   this.expenses = this.afs.collection<Expense>('expenses', ref => ref.where('uid', '==', uid));

  // }

  loadMyData()  {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    if (user == null) {
      console.log("no user");
      return;
    }


    this.expenseCollection = this.afs.collection<Expense>('expenses', ref => ref.where('uid', '==', uid));
    this.loanCollection = this.afs.collection<Loan>('loans', ref => ref.where('uid', '==', uid));

    this.expenses = this.expenseCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc['id'];
          return { id, ...data };
        });
      })
    )

    // this.loans = this.expenseCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc['id'];
    //       return { id, ...data };
    //     });
    //   })
    // )
  }

  setUserType(usertype) {
    this.usertype = usertype;
  }

  setUID(UID) {
    this.uid = UID;
  }

  getUID()  {
    return this.uid;
  }

  getExpenses(): Observable<Expense[]>  {
    return this.expenses;
  }

  getExpense(id: string): Observable<Expense> {
    return this.expenseCollection.doc<Expense>(id).valueChanges().pipe(
      take(1),
      map(expense => {
        expense.id = id;
        return expense;
      })
    );
  }

  getLoans(): Observable<Loan[]>  {
    return this.loans;
  }

  getLoan(id: string): Observable<Loan> {
    return this.loanCollection.doc<Loan>(id).valueChanges().pipe(
      take(1),
      map(loan => {
        loan.id = id;
        return loan;
      })
    );
  }

  addExpense(expense: Expense): Promise<DocumentReference>  {
    var user = firebase.auth().currentUser;

    return this.expenseCollection.add(expense);
  }

  deleteExpense(id: string): Promise<void>  {
    return this.expenseCollection.doc(id).delete();
  }

  addLoan(loan: Loan): Promise<DocumentReference> {
    var user = firebase.auth().currentUser;
    return this.loanCollection.add(loan);
  }

  deleteLoan(id: string): Promise<void> {
    var user = firebase.auth().currentUser;
    return this.loanCollection.doc(id).delete();
  }

}
