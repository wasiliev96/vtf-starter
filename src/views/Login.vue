<template lang="pug">
h1 Login to Your Account
p
  input(type="text" placeholder="Email" v-model="email")
p
  input(type="password" placeholder="Password" v-model="password")
p(v-if="errMsg")
  | {{ errMsg }}
p
  button(@click="signIn")
    | Submit
</template>

<script setup lang='ts'>
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router

ref: email = ''
ref: password = ''
ref: errMsg = '' // ERROR MESSAGE

const router = useRouter() // get a reference to our vue router

const signIn = () => { // we also renamed this method
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password) // THIS LINE CHANGED
    .then((data) => {
      console.log('Successfully logged in!');
      router.push('/') // redirect to the feed
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMsg = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errMsg = 'Incorrect password'
          break
        default:
          errMsg = 'Email or password was incorrect'
          break
      }
    });
}
</script>
