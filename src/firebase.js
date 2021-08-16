import firebase from "firebase";
import { ref, onUnmounted } from 'vue';

const config = {
  apiKey: "AIzaSyD8f2NZzajzlPd_Ls6W7HfVbvUlOOjILPc",
  authDomain: "contact-book-82d28.firebaseapp.com",
  projectId: "contact-book-82d28",
  storageBucket: "contact-book-82d28.appspot.com",
  messagingSenderId: "1013015998227",
  appId: "1:1013015998227:web:845ed8d672664a434f74e6",
};

const firebaseapp = firebase.initializeApp(config);


const db = firebaseapp.firestore();
const contactsCollection = db.collection("contacts");

// const t =  contactsCollection.add({"firstName": "Tom", "lastName": "Soth", "email": "tomsoth@gmail.com"});
// console.log(t);

export const createContact = contact => {
  return contactsCollection.add(contact);
};


export const getContact =  async id => {
  const contact = await contactsCollection.doc(id).get()
  return contact.exists ? contact.data() : null
};

export const updateContact = (id, contact) => {
  return contactsCollection.doc(id).update(contact);
};

export const deleteContact = (id) => {
  return contactsCollection.doc(id).delete();
};

export const searchContact = async name => {
  const contacts = useLoadcontacts();
  let searched = [];
  for (const {firstName, lastName, email } in contacts){
    if (firstName == name || lastName) {
      searched.push({
        firstName,
        lastName,
        email
      });
    }
  }
  console.log(searched);

}

export const useLoadcontacts = () => {
  const contacts = ref([]);
  const close = contactsCollection.onSnapshot(snapshot => {
    contacts.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  })
  onUnmounted(close);
  return contacts;
}
