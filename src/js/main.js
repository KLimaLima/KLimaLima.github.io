import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, push, query, limitToLast } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBjbzbTm00LCU_c03O-ijwn-SH_I1NLoWI",
  authDomain: "amir-dua.firebaseapp.com",
  projectId: "amir-dua",
  storageBucket: "amir-dua.firebasestorage.app",
  messagingSenderId: "226472608402",
  appId: "1:226472608402:web:315ce5eca8a1305ea81c4b",
  databaseURL: "https://amir-dua-default-rtdb.asia-southeast1.firebasedatabase.app"
};

initializeApp(firebaseConfig);

// function writeUserData(name, content) {
    
//     const db = getDatabase();

//     const reference = ref(db, 'fake_data/');

//     const pushRef = push(reference)

//     set(pushRef, {

//         username: name,
//         content: content
//     });
// }

const temperature_text = document.getElementById('temperature_text');

const db = getDatabase();

const reference = ref(db, 'fake_data/');

// reference.limitToLast(1).on('child_added', (snapshot) => {
//   console.log(snapshot.key);
//   console.log(snapshot.val());
// });

const recentPostsRef = query(reference, limitToLast(1));

onValue(recentPostsRef, (snapshot) => {

    let temperature = '';

    snapshot.forEach((childSnapshot) => {

        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log('childKey');
        console.log(childKey);
        console.log('childData');
        console.log(childData);

        temperature = temperature + '<li>' + childData.username + ' said ' + childData.content + '</li>';
    });

    temperature_text.innerHTML = temperature;
});
// , {
//     onlyOnce: true
// });