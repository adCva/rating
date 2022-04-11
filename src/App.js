import { useState } from "react";
import styled from "styled-components";
import './Reset.css';


function App() {
  // ================== State.
  const [ score, setScore ] = useState(null);
  const [ sendScore, setSendScore ] = useState(false);


  // ================== Submit score.
  const submitScore = () => {
    if (score === null) {
      alert("You have to select a score first.");
    } else {
      setSendScore(true);
    }
  }
  


  return (
    <div className="App">
      {sendScore ? (
        /* ================== Resault component ================== */
        <ResaultComponent>
          <img src="./images/illustration-thank-you.svg" alt="Thank you!" />
          <h5>You selected {score} out of 5</h5>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch</p>
        </ResaultComponent>
      ) : (
        /* ================== Main component ================== */
        <MainComponent>
          <img src="./images/icon-star.svg" alt="Star" />
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          {/* ================== Buttons component ================== */}
          <ButtonsContainer>
            <button onClick={() => setScore(1)} className={score === 1 ? "selected" : null }>1</button>        
            <button onClick={() => setScore(2)} className={score === 2 ? "selected" : null }>2</button>        
            <button onClick={() => setScore(3)} className={score === 3 ? "selected" : null }>3</button>        
            <button onClick={() => setScore(4)} className={score === 4 ? "selected" : null }>4</button>        
            <button onClick={() => setScore(5)} className={score === 5 ? "selected" : null }>5</button>        
          </ButtonsContainer>
          <button onClick={submitScore}>Submit</button>
        </MainComponent>
      )}
    </div>
  );
}

export default App;



/* ================== Resault component ================== */
const ResaultComponent = styled.div`
  background: rgb(33,40,50);
  background: linear-gradient(177deg, rgba(33,40,50,1) 0%, rgba(23,28,36,1) 65%);
  width: min(90%, 350px);
  padding: 3rem 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: rgba(24, 24, 24, 0.35) 0px 5px 15px;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  h5 {
    background-color: var(--dark-blue);
    color: var(--orange);
    border-radius: 15px;
    padding: 0.5rem 0 0.4rem;
    margin: 1.5rem auto 0;
    width: 220px;
  }

  h1 {
    color: var(--white);
    font-size: 24px;
    font-weight: var(--fw-bold);
    letter-spacing: 1px;
    margin: 2rem 0 0.85rem;
  }

  p {
    color: var(--medium-gray);
    font-size: 13px;
    letter-spacing: 0.8px;
    line-height: 1.4;
  }
`



/* ================== Main component ================== */
const MainComponent = styled.div`
  background: rgb(33,40,50);
  background: linear-gradient(177deg, rgba(33,40,50,1) 0%, rgba(23,28,36,1) 65%);
  width: min(90%, 350px);
  padding: 2rem 1.5rem;
  border-radius: 15px;
  box-shadow: rgba(24, 24, 24, 0.35) 0px 5px 15px;

  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  img {
    background-color: #2c3540;
    border-radius: 50px;
    width: 35px;
    padding: 0.6rem;
  }

  h1 {
    color: var(--white);
    font-size: 24px;
    font-weight: var(--fw-bold);
    letter-spacing: 1px;
    margin: 1.5rem 0 0.75rem;
  }

  p {
    color: var(--medium-gray);
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 1.4;
  }

  button {
    background-color: var(--orange);
    color: var(--white);
    width: 100%;
    padding: 0.8rem 0 0.7rem;
    border-radius: 50px;
    text-transform: uppercase; 
    font-weight: var(--fw-bold);
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
      background-color: var(--white);
      color: var(--orange);
    }
  }
`



/* ================== Buttons component ================== */
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  button {
    width: 40px;
    height: 40px;
    background-color: var(--dark-blue);
    color: var(--medium-gray);
    border-radius: 50px;
    padding: 0.2rem 0 0;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
      background-color: var(--orange);
      color: var(--white);
    }
  }

  .selected {
    background-color: var(--medium-gray);
    color: var(--white);
  }
`