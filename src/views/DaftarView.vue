<script>
import {getFirestore,onSnapshot,collection,doc,deleteDoc,setDoc,addDoc,orderBy,query} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {onUnmounted, ref} from 'vue';

const firebaseConfig = {
  apiKey: "AIzaSyBga32_uy4GeVbHqa982VG4Ltpu43MaYCM",
  authDomain: "iuran-web-6cb9a.firebaseapp.com",
  projectId: "iuran-web-6cb9a",
  storageBucket: "iuran-web-6cb9a.appspot.com",
  messagingSenderId: "692382004752",
  appId: "1:692382004752:web:fe94322aab4432b6dbbc95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  name: 'App',
  components:{},
  methods: {
    addNewMessage:function() {
      addDoc(collection(db,'messages'),{
        text:this.$refs.newmessage.value,
        date:Date.now()
      });
    },
    updateMessage:function(message) {
      setDoc(doc(db,'messages',message.id),{
        text:message.text,
        date:message.date
      });
    },
    deleteMessage:function(id) {
      deleteDoc(doc(db,'messages',id))
    }
  },
  data:()=> {
    return {
      messages:ref([])
    }
  }, 
  mounted() {
    const latestQuery = query(collection(db,"messages"),orderBy('date'));
    const livemessages = onSnapshot(latestQuery,(snapshot)=>{
      this.messages = snapshot.docs.map((doc) => {
        return {
          id:doc.id,
          text:doc.data().text,
          date:doc.data().date
        }
      });
    });
    onUnmounted(livemessages)

  }
}
</script>

<template>
  <div class="flex-row h-screen w-1/2 justify-between items-center p">
    <div v-for="message in messages">
      <tr class="flex">
        <input v-model="message.text" type="text">
        <button @click="updateMessage(message)" class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">update</button>
        <button @click="deleteMessage(message.id)" class="bg-white">delete</button>
      </tr>

    </div>
    <input ref="newmessage" placeholder="new message..." type="text" class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-[#0099ff] peer">
    <button @click="addNewMessage" class="bg-white">addnew</button>
  </div>
</template>
