import styled from "styled-components";
import backgroundImg from "../../assets/sonia-jahandari-Iz_dQ_t_9HE-unsplash.jpg"


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
export const Background = styled.div `
height: 100%;
flex: 1;
background: url(${backgroundImg}) ;
background-size: cover;
filter: brightness(0.3);



`


;