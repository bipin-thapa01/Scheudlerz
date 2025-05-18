import {useState, useEffect} from "react";
import "./Quotes.css"

function Quotes() {
  const [quote, getQuote] = useState('');
  const [writer, getWriter] = useState('');
  const [change, getChange] = useState('1');
  useEffect(()=>{
    let index = Math.ceil(Math.random() * 50);
    getQuote(quotes[`quotes${index}`].quotes);
    getWriter(quotes[`quotes${index}`].writer);
  },[change])

  const quotes = {
    quotes1: { quotes: "Be yourself; everyone else is already taken.", writer: "Oscar Wilde" },
    quotes2: { quotes: "Act as if what you do makes a difference. It does.", writer: "William James" },
    quotes3: { quotes: "Success is not final, failure is not fatal.", writer: "Winston Churchill" },
    quotes4: { quotes: "What you get by achieving your goals is not as important as what you become.", writer: "Zig Ziglar" },
    quotes5: { quotes: "Dream big and dare to fail.", writer: "Norman Vaughan" },
    quotes6: { quotes: "Believe you can and you're halfway there.", writer: "Theodore Roosevelt" },
    quotes7: { quotes: "Don’t wait. The time will never be just right.", writer: "Napoleon Hill" },
    quotes8: { quotes: "Everything you can imagine is real.", writer: "Pablo Picasso" },
    quotes9: { quotes: "Do what you can, with what you have, where you are.", writer: "Theodore Roosevelt" },
    quotes10: { quotes: "Turn your wounds into wisdom.", writer: "Oprah Winfrey" },
    quotes11: { quotes: "If you're going through hell, keep going.", writer: "Winston Churchill" },
    quotes12: { quotes: "Happiness depends upon ourselves.", writer: "Aristotle" },
    quotes13: { quotes: "You are enough just as you are.", writer: "Meghan Markle" },
    quotes14: { quotes: "Wherever you go, go with all your heart.", writer: "Confucius" },
    quotes15: { quotes: "It always seems impossible until it’s done.", writer: "Nelson Mandela" },
    quotes16: { quotes: "Simplicity is the ultimate sophistication.", writer: "Leonardo da Vinci" },
    quotes17: { quotes: "Light tomorrow with today.", writer: "Elizabeth Barrett Browning" },
    quotes18: { quotes: "Life is either a daring adventure or nothing.", writer: "Helen Keller" },
    quotes19: { quotes: "No pressure, no diamonds.", writer: "Thomas Carlyle" },
    quotes20: { quotes: "Be so good they can’t ignore you.", writer: "Steve Martin" },
    quotes21: { quotes: "In the middle of every difficulty lies opportunity.", writer: "Albert Einstein" },
    quotes22: { quotes: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", writer: "Ralph Waldo Emerson" },
    quotes23: { quotes: "The best way out is always through.", writer: "Robert Frost" },
    quotes24: { quotes: "He who has a why can endure any how.", writer: "Friedrich Nietzsche" },
    quotes25: { quotes: "Make each day your masterpiece.", writer: "John Wooden" },
    quotes26: { quotes: "Start where you are. Use what you have. Do what you can.", writer: "Arthur Ashe" },
    quotes27: { quotes: "Life isn’t about finding yourself. It’s about creating yourself.", writer: "George Bernard Shaw" },
    quotes28: { quotes: "A goal without a plan is just a wish.", writer: "Antoine de Saint-Exupéry" },
    quotes29: { quotes: "Strive not to be a success, but rather to be of value.", writer: "Albert Einstein" },
    quotes30: { quotes: "Fall seven times, stand up eight.", writer: "Japanese Proverb" },
    quotes31: { quotes: "You miss 100% of the shots you don't take.", writer: "Wayne Gretzky" },
    quotes32: { quotes: "The harder you work for something, the greater you’ll feel when you achieve it.", writer: "Unknown" },
    quotes33: { quotes: "Your life does not get better by chance, it gets better by change.", writer: "Jim Rohn" },
    quotes34: { quotes: "Keep your face always toward the sunshine—and shadows will fall behind you.", writer: "Walt Whitman" },
    quotes35: { quotes: "Don’t watch the clock; do what it does. Keep going.", writer: "Sam Levenson" },
    quotes36: { quotes: "The only limit to our realization of tomorrow is our doubts of today.", writer: "Franklin D. Roosevelt" },
    quotes37: { quotes: "Go confidently in the direction of your dreams.", writer: "Henry David Thoreau" },
    quotes38: { quotes: "What we think, we become.", writer: "Buddha" },
    quotes39: { quotes: "Perseverance is not a long race; it is many short races one after another.", writer: "Walter Elliot" },
    quotes40: { quotes: "With the new day comes new strength and new thoughts.", writer: "Eleanor Roosevelt" },
    quotes41: { quotes: "You do not find the happy life. You make it.", writer: "Camilla Eyring Kimball" },
    quotes42: { quotes: "The best revenge is massive success.", writer: "Frank Sinatra" },
    quotes43: { quotes: "Courage is one step ahead of fear.", writer: "Coleman Young" },
    quotes44: { quotes: "Everything has beauty, but not everyone sees it.", writer: "Confucius" },
    quotes45: { quotes: "Only in the darkness can you see the stars.", writer: "Martin Luther King Jr." },
    quotes46: { quotes: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", writer: "Eleanor Roosevelt" },
    quotes47: { quotes: "Doubt kills more dreams than failure ever will.", writer: "Suzy Kassem" },
    quotes48: { quotes: "Do not wait to strike till the iron is hot, but make it hot by striking.", writer: "William Butler Yeats" },
    quotes49: { quotes: "Leap and the net will appear.", writer: "John Burroughs" },
    quotes50: { quotes: "Be pro. Not crow.", writer: "Bipin Thapa" },
  };

  return (
    <div id="quote-holder">
      <div id="quote-text">{quote}</div>
      <div id="quote-writer">-{writer}</div>
      <button id="quote-change-button" onClick={()=> getChange(prev => prev+1)}>New Quote</button>
    </div>
  );
}
export default Quotes;