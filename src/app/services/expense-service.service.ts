import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  expenses=[
    {ID: 111, name: "groceries", amount: 50.00, date: "04-21-2021"},
    {ID: 112, name: "entertainment", amount: 45.00, date: "04-25-2021"},
    {ID: 113, name: "gas", amount: 30.00, date: "04-26-2021"},
    {ID: 114, name: "restaurant", amount: 25.00, date: "04-29-2021"},
    {ID: 115, name: "auto repair", amount: 150.00, date: "05-02-2021"},
  ]

  constructor(private router: Router, public firebase: AngularFirestore) { }

  getExpenses()  {
    return this.expenses;
  }

  addExpense(name, amount, date)  {
    var db = this.firebase;
    let uid = firebase.auth().currentUser.uid
    db.collection("expenses").add({
      name: name, 
      amount: amount,
      date: date
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    })
  }
}
