import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { db, auth, provider } from '../firebaseConfig';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

  const addUser = () => {

    db.collection('users').add({
      name: 'Rafael',
      age: 25
    })
  }

  const readUsers = async () => {
    const data = await db.collection('users').get();
    setResult(data.docs.map( (doc) => (
      doc.data()
    )));
  }

  const updateUsers = async () => {
    await db
    .collection('users')
    .doc('DFxAXv8fxmzKwneScgMU')
    .set({
      name: 'Rafael3',
      age: '253'
    })
  }

  const readUser = async () => {
    await db.collection('users').doc('pnAznsp6NccX4o3IfN6x').get()
    .then( (snapShot) => { 
      setResult(snapShot.data()
    )})
  }

  const deleteUser = async () => {
    await db.collection('users').doc('pnAznsp6NccX4o3IfN6x').delete()
  }

  const [user, loading] = useAuthState(auth);
  const [namex, setNamex] = useState();

  useEffect ( () => {    
    if(user)
    {
      db
      .collection('users')
      .doc(user.uid)
      .set({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp()
      })

      setNamex(user.displayName)

    }
  },[user])

  const login = async () => {
    await auth.signInWithPopup(provider)
    .then( result => {
      if(user)
      {
        if(user.uid === result.user.uid)
        {
          console.log('É igual')
        }
      }else
      {
        db.collection('users').add({
            id: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
            lastSeen: firebase.firestore.FieldValue.serverTimestamp()        
          })
      }
    }) 
  }