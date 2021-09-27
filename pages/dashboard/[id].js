import { useEffect } from 'react';
import { db, auth, provider } from '../../firebaseConfig';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import firebase from 'firebase';
import router from 'next/router';


function Dashboard(props){
    
    useEffect( () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user)
                router.push(`/`)            
        })
   })

    return(
        <div className={styles.container}>
            <Head>
              <title>Dashboard</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>         
              <Avatar   sx={{ width: 100, height: 100 }}  alt="Remy Sharp" src={props.photo}  />
              <span>Last Login : {props.last_login} </span>
              <h1>Welcome - {props.name}</h1>
              <Button sx={{bgcolor: 'white'}}  onClick={ () => auth.signOut()} variant="contained">
                <LogoutIcon/>
                Logout</Button>
            </Container>
        </div>
    );
}

export default Dashboard;


export async function getServerSideProps(context)
{
  
  let data =  [];
  const ref = await db.collection('loggins').where('id','==',context.query.id).get()
  .then((querySnapshot) => {
    querySnapshot.forEach( (doc) => {
      data = doc.data()
    })
  })
  
  return{
    props:{
      name: data.name,
      photo: data.photoURL,
      last_login : JSON.stringify(data.lastLogin .toDate().toLocaleTimeString() )
    }
  }
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  span{
    font-size: 16px;
    color: gray;
    margin-top: 10px;
  }

  h1{
    color: white;
  }

  button{
    color: #8e24aa;
  }

  button:hover{
    background-color: #8e24aa ;
    color: white;
  }

  svg{
    margin-right: 10px;
  }

`;