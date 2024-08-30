let btnQoute=document.querySelector('#btnQoute')
let quote=[
  {'qoute':"Do not take life too seriously. You will not get out alive.",
    'Author':"--Elbert Hubbaard"
  },
  {'qoute':"The best revenge is massive success.",
    'Author':"--Frank sinatra"
  },
  {'qoute':'It is never too late to be what you might have been.',
    'Author':"--George Eliot"
  },
  {'qoute':"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    'Author':"--Ralph Waldo Emerson"
  },
  {'qoute':"Pain is inevitable. Suffering is optional.",
    'Author':"Haruki Murakami"
  },
  {'qoute':"All the world's a stage, and all the men and women merely players.",
    'Author':"--William Shakespeare"
  },
  {'qoute':"Be kind, for everyone you meet is fighting a hard battle.",
    'Author':"--Plato"
  },
  {'qoute':"Unable are the loved to die for love is immortality.",
    'Author':"--Emily Dickinson"
  },
  {'qoute':"Let me live, love, and say it well in good sentences.",
    'Author':"--Sylvia Plath"
  },
  {'qoute':"Don't let your happiness depend on something you may lose.",
    'Author':"--C.S. Lewis"
  },
  {'qoute':"We are all broken, that's how the light gets in.",
    'Author':"--Voltaire"
  },
  {'qoute':"Life is tough my darling, but so are you.",
    'Author':"--Stephanie Bennett Henry"
  },
]



btnQoute.addEventListener('click',function() {
let rNum=Math.floor(Math.random()*quote.length);
  
document.getElementById('quote').innerHTML=quote[rNum].qoute;
document.getElementById('auther').innerHTML=quote[rNum].Author;
})













