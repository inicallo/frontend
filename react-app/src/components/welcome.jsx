import styled from 'styled-components'
import AboutPage from '../pages/about';

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
    border-radius: 30px;
`
function welcome() {
    return (
        <div>
            <h1 style={{color: '#36C2CE'}}>
                Welcome to my website!
            </h1>
            <StyledButton>Submit</StyledButton>
        </div>
    );
}

export default welcome