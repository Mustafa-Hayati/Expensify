import * as firebase from "firebase";
// import dotenv from "dotenv";
// import default from './../selectors/expenses';
// dotenv.config();

// Use a vpn

// I trust you
const firebaseConfig = {
  apiKey: "AIzaSyCee64GgTafllVzyUb88f8i9tDJW8MLZ_M",
  authDomain: "expensify-1371.firebaseapp.com",
  databaseURL: "https://expensify-1371.firebaseio.com",
  projectId: "expensify-1371",
  storageBucket: "expensify-1371.appspot.com",
  messagingSenderId: "702937559421",
  appId: "1:702937559421:web:0f23d6985fa577745e5c14",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { firebase, db as default };

// db.ref()
//   .set({
//     name: "Mustafa Hayati",
//     age: 29,
//     stressLevel: 6,
//     job: {
//       title: "Web Developer",
//       company: "Source",
//     },
//     location: {
//       city: "Meshgin Shahr",
//       country: "Fucking Iran",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch(err => {
//     console.log("This failed", err);
//   });

// db.ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("removed");
//   });

// db.ref("isSingle").set(null);

// db.ref()
//   .update({
//     name: "Taylor Swift",
//     age: 31,
//     job: "Web developer/designer, hacker, roboticist, programmer",
//     isSingle: null,
//   })
//   .then(() => {
//     console.log("updated");
//   });

// db.ref()
//   .update({
//     job: "CEO",
//     "location/city": "New York",
//   })
//   .then(() => {
//     console.log("UPDATED");
//   });

// db.ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Google",
//     "location/city": "Seattle",
//   })
//   .then(() => console.log("FUCKING UPDATED"));

// db.ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const onValueChange = db.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   db.ref("age").set(28);
// }, 3500);

// setTimeout(() => {
//   db.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   db.ref("age").set(29);
// }, 10000);

// const firebaseNotes = {
//   notes: {
//     uniquID: {
//       title: "hi",
//       body: "This is my note",
//     },
//     otherUniqueId: {
//       title: "bye",
//       body: "This is my other note",
//     },
//   },
// };

// const notes = [
//   {
//     id: "1",
//     title: "hi",
//     body: "This is my note",
//   },
//   {
//     id: "2",
//     title: "bye",
//     body: "This is my other note",
//   },
// ];
// db.ref("notes").set(notes);

// db.ref("notes").push({
//   title: "Check the Chimney",
//   body: "and get the wire down",
// });

// db.ref("notes/-MIybH_LHxPRAeqdvZmu").update({
//   body: "Buy food",
// });

// db.ref("notes/-MIybH_LHxPRAeqdvZmu").remove();

// db.ref("expenses").push({
//   description: "Phone Bill",
//   note: "",
//   amount: 5900,
//   createdAt: 78322312,
// });

// db.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 110000,
//   createdAt: 199003332,
// });

// db.ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         ...childSnapshot.val(),
//         id: childSnapshot.key,
//       });
//     });

//     console.log(expenses);
//   });

// db.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       ...childSnapshot.val(),
//       id: childSnapshot.key,
//     });
//   });

//   console.log(expenses);
// });

// db.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// db.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// db.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// it doesn't just get called for new children, also get called for the existing ones.
