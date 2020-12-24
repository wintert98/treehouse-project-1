/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote:  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: " Albert Einstein",
    year: 1948,
    citation: 'Goodreads.com'
  },
  {
    quote: "If you tell the truth, you don't have to remember anything." ,
    source: " Mark Twain",
    year: 1885
  },
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    source: " Maya Angelou",
    year: 1968
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source: " Dr. Seuss",
    year: 1955
  },
  {
    quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
    source: " Narcotics Anonymous",
    year: 1985
  }
]

console.log(quotes[0]['source']);
/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
   // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  let i = Math.floor(Math.random() * array.length)
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let randomQuote = array[i]
  // 3. Return the variable storing the random quote object
  return randomQuote
}
let randomQuote = getRandomQuote(quotes);

/***
 * `printQuote` function
***/
function printQuote() {
   // 1. Create a variable that calls the getRandomQuote() 
  // function
  let randomQuote = getRandomQuote(quotes);

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

   let html = `<p class="quote"> ${randomQuote.quote}</p><p class="source">${randomQuote.source}`
              

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
    if (randomQuote.citation) {
      html += `<span class="citation">${randomQuote.citation}</span>`

    }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
    if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`

    }

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
    html += '</p>'

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

document.getElementById('quote-box').innerHTML = html; 

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);