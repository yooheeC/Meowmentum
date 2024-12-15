const quotes = [
    { quote: "the world is my meow meow.",
        author: "meow"
    },
    { quote: "The only thing we have to meow is meow itself.",
        author: "-Franklin D. Meowmeow"
    },
    { quote: "Do one thing every day that meow you",
        author: "Meow Roosevelt"
    },
    { quote: "Meow done is better than meow said.",
        author: "Benjamin meow"
    },
    { quote: "Be meow meow; everyone else is already taken.",
        author: "Oscar Meow"
    },
    { quote: "You must be the meow you wish to see in the world.",
        author: "Mahatma Meow"
    },
    { quote: "Spread meow everywhere you go. Let no one ever come to you without meow happier",
        author: "Meow Teresa"
    },
    { quote: "The way to get started is to quit talking and begin meowing.",
        author: "Meow Disney"
    },
    { quote: "Never let the meow of striking out keep you from playing the game.",
        author: "Babe Meow"
    },
    { quote: "Only a meow meowed for others is a life worthwhile.",
        author: "Meow Einstein"
    },
]

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

quote.addEventListener("mouseover", reveal);

function reveal(){
    author.classList.toggle("hidden");
}