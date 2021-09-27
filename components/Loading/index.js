import styled from 'styled-components';
import Circle from 'better-react-spinkit/dist/Circle';

function Loading() {
    return (
        <Container>
            <Circle color='#fff' size={50} />
        </Container>
    )
}

export default Loading;

const Container = styled.div`

    display: grid;
    height: 100vh;
    place-items: center;
    background: #8e24aa;

`;

