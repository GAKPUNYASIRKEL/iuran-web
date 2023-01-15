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
  <div class="flex-row h-screen w-full justify-center items-center bg-gray-800">
    <div v-for="message in messages" class="flex justify-center">
      <tr class="flex">
        <input v-model="message.text" type="text">
        <button @click="updateMessage(message)" class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        </button>

        <button @click="deleteMessage(message.id)"  class="flex p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-700 transition-all duration-300 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        </button>


      </tr>

    </div>
    <div class="flex justify-center">
      <input ref="newmessage" placeholder="new message..." type="text" class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-[#0099ff] peer">
      <button @click="addNewMessage" class="text-white bg-[#0099ff] hover:bg-[#0088ff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#0099ff] dark:hover:bg-[#0099ff] focus:outline-none dark:focus:ring-[#0088ff] w-full xl:w-auto">addnew</button>
    </div>
    
  </div>
</template>
