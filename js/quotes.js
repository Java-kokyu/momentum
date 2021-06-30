const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,
        author: "James Carmeron"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison" 
    },
    {
        quote: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs"
    },
    {
        quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
        author: "Barack Obama"
    },
    {
        quote: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein"
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const randomNumber = Math.floor(Math.random() * quotes.length);
const todayQuote = quotes[randomNumber];

quote.textContent = todayQuote.quote;
author.textContent = todayQuote.author;