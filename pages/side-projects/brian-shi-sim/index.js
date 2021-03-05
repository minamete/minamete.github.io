import Head from 'next/head'
import Header from '../../../components/Header'
import PageContent from '../../../components/PageContent'
import React, {useState, useEffect} from 'react'
import StyledBrian from '../../../styles/brian.styled.js'
import brianData from '../../../public/brianQuotes';
export default function Brian() {
    const [typewriterStarted, setTypewriterStarted] = useState(false);
    const [typeWriterEnded, setTypewriterEnded] = useState(false);
    const [brianShiQuote, setBrianShiQuote] = useState('');
    const [{displayedQuote, index}, setDisplayedQuote] = useState({displayedQuote: null, index: 0});
    const [quotes, setQuotes] = useState([]);

    useEffect(()=> {
      if(brianShiQuote=='') return; //prevent it from running at start
      //gets here
      if(index < brianShiQuote.length) {
        setTimeout(() => {
          setDisplayedQuote({displayedQuote: displayedQuote+brianShiQuote.charAt(index), index: index+1})
        }, 3000/brianShiQuote.length)
      } else {
        setTypewriterEnded(true);
      }
    }, [displayedQuote])
   
    useEffect(()=>{
      setQuotes(brianData);
    },[])    

    function getQuote() {
      setTypewriterEnded(false);
      if(quotes == null) return;
      let tempQuote = brianShiQuote;
      while(tempQuote == brianShiQuote) {
        tempQuote = quotes[Math.floor(Math.random() * quotes.length)];
      }
      setBrianShiQuote(tempQuote);
      //reset displayedQuote, triggering the useEffect hopefully
      setDisplayedQuote({displayedQuote: '', index: 0}); 
      setTypewriterStarted(true);
    }
  
    return (
      <StyledBrian started = {typewriterStarted} ended = {typeWriterEnded} text = {brianShiQuote}>
        <Head>
          <title>Notable Quote Generator</title>
        </Head>
  
        <main> 
          <button className = "back" onClick={e => window.location.href="/sideprojects"}>back to side projects</button>
          <div className={typewriterStarted ? "typewriter" : null} onAnimationEnd={() => {setTypewriterEnded(true);}}>
            <h1>{displayedQuote}</h1>
          </div>         
          <button className="generate" onClick={getQuote}>generate</button>
        </main>
  
      </StyledBrian>
    )
  }
  