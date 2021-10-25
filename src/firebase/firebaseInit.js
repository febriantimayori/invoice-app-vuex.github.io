// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';   //pakai ini soalnya firebase v9
import "firebase/compat/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'

var firebaseConfig = {
 apiKey: "AIzaSyCq5dyWsXnJnu8HWD1vT8QuCyYHWw7LVjQ",
  authDomain: "invoicevuex.firebaseapp.com",
  projectId: "invoicevuex",
  storageBucket: "invoicevuex.appspot.com",
  messagingSenderId: "257446835822",
  appId: "1:257446835822:web:9795524f976d5e32a9187f"
};

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();