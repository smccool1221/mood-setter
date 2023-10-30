import React, { useState, useEffect } from 'react';
import './MoodSetter.css';

function MoodSetter() {
    const [mood, setMood] = useState('Neutral'); // 
    const [message, setMessage] = useState('');
    const [randomQuote, setRandomQuotes] = useState("")

    const quotes = [
        "Never regret anything that made you smile. Mark Twain",
        "Simplicity makes me happy. Alicia Keys",
        "Happiness comes in waves. It’ll always come back.",
        "There is only one happiness in this life, to love and be loved. George Sand",
        "When you change your thoughts, remember to also change your world. Norman Vincent Peale",
        "The road to success and the road to failure are almost exactly the same. Colin R. Davis",
        "You learn more from failure than from success. Don’t let it stop you. Failure builds character. Unknown",
        "Success is stumbling from failure to failure with no loss of enthusiasm. Winston Churchill",
        "Love your family work super hard live your passion. Gary Vaynerchuk",
        "Do what you can with what you have where you are. Theodore Roosevelt"]

    
    useEffect(() => {
        setMessage(`Your current mood is: ${mood}`);
        
     
        const timer = setTimeout(() => {
            setMessage('');
        }, 5000);

        const randomIndex = Math.floor(Math.random() * quotes.length)
            setRandomQuotes(quotes[randomIndex])

        return () => {
            clearTimeout(timer); 
        };
    }, [mood]);

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

    const resetHandle = () =>{
        setMood("Neutral")
    }
   
  
    return (
        <div className={`mood-container ${mood.toLowerCase()}`}>
            <h1>Mood Setter</h1>
            <select value={mood} onChange={handleMoodChange}>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Neutral">Neutral</option>
                  </select>
                    {message && <p>{message}</p>}
                    {message && <h1>You got this!</h1>}
                    <button onClick={resetHandle}>Reset</button>
                    <p>{randomQuote}</p>
            </div>

        
    );
}

export default MoodSetter;