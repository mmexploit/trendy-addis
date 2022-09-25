import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: linear-gradient(81.7deg, #4F3782 27.64%, #9160C6 67.47%, #BD85E9 83.82%);

    @media (max-width: 50em) {
            display: grid;
            grid-template-columns: 1em 200px auto auto;
            justify-items: end;
        }
`