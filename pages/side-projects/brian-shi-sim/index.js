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

    function getRandomizedQuote() {
      setTypewriterEnded(false);
      if(quotes == null) return;
      let tempQuote = quotes.join('\n');
      setBrianShiQuote(retrieveChain(tempQuote));
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
          <button className = "back" onClick={e => window.location.href="/side-projects"}>back to side projects</button>
          <div className={typewriterStarted ? "typewriter" : null} onAnimationEnd={() => {setTypewriterEnded(true);}}>
            <h1>{displayedQuote}</h1>
          </div>         
          <button className="generate" onClick={getQuote}>generate</button>
          <button className="generate" onClick={getRandomizedQuote}>randomize</button>
        </main>
  
      </StyledBrian>
    )
  }
  
  function markovChainGenerator(text) {
    let textArr = text.split(' ');
    const markovChain = {};
    for(let i = 0; i < textArr.length; i++) {
        let word = textArr[i].toLowerCase();
        if(!markovChain[word]) markovChain[word] = [];
        if(textArr[i+1]) markovChain[word].push(textArr[i+1].toLowerCase());
    }
    return markovChain;
}
 
function retrieveChain(text) {    
    const markovChain = markovChainGenerator(text);
    const words = Object.keys(markovChain);
    let currentWordIndex = words[Math.floor(Math.random() * words.length)];
    let result = '';
    for(let i = 0; i < words.length; i++) {
        result += currentWordIndex + " ";
        let newWord = markovChain[currentWordIndex][Math.floor(Math.random()*markovChain[currentWordIndex].length)];
        currentWordIndex = newWord;
        if(!currentWordIndex || !markovChain.hasOwnProperty(currentWordIndex)) currentWordIndex = words[Math.floor(Math.random()*words.length)]; //reroll
    }
    if(result.includes("\n")) {
    	let temp = Math.floor(Math.random()*result.split('\n').length);
    	while(!result.split('\n')[temp] || result.split('\n')[temp].includes('@')) temp = Math.floor(Math.random()*result.split('\n').length);
    	return result.split('\n')[temp];
    }
    return result;
}