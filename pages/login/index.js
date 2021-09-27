import styled from 'styled-components';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { auth, provider} from '../../firebaseConfig';

function Login() {

    const logIn = async () => {
        await auth.signInWithPopup(provider);
    }

    return (
        <Container>
            <Head>
                <title>Login Page</title>
            </Head>
            <Form>   
                <Button 
                    sx={{bgcolor: 'white'}} 
                    variant="contained"
                    onClick={logIn}
                >
                    <GoogleIcon/>
                    <Typography variant="h5">Login</Typography>                    
                </Button>               
            </Form>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh ;
    background-color: #8e24aa;
`;

const Form = styled.form`
    display: grid;
    place-items: center;
    width: 300px;
    height: 300px;

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

    h3{
        color: white;
        font-size: 30px;
    }

    input{
        background-color: #8e24aa;
        border: none;
        border-bottom: 1px solid whitesmoke;
        margin-bottom: 15px;
        color: white;
    }

    input:focus{
        outline: none;
    }

`;

