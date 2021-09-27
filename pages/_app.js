import '../styles/globals.css';
import {useEffect} from 'react';
import { db, auth } from '../firebaseConfig';
import firebase from 'firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import Login from './login/';
import Loading from '../components/Loading';

import router from 'next/router';

function MyApp({ Component, pageProps }) {
  
  const [ user, loading ] = useAuthState(auth);
  
  useEffect( () => {
    if(user)
    {
      db
      .collection('loggins')
      .doc(user.uid)
      .set({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      },{merge:true})
    }
  },[user])

  if(loading)
    return <Loading/>

  if(!user)
    return <Login  />
  
  return <Component id={user.uid} {...pageProps} />
}

export default MyApp
