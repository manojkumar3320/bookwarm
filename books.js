var genres=[];
var bookArray=[];

var genreSelect = document.querySelector('select#genres');
var bookSelect = document.querySelector('select#book');

var bookDetails= document.querySelector('.book-details');

 genreSelect.addEventListener("change",genreChange);
  bookSelect.addEventListener("change",bookChange);

var books = {   
    "book1":{
        name : 'darkness at room',
        author : 'koestler',
        genre : 'investigative',
        summary:'Darkness at Noon is the story of a man named Rubashov, who is arrested in the middle of the night by the state’s secret police. The Party he has long served tortures him and demands he confess to crimes they know he has not committed.'
    },

    "book2":{
        name : 'slaughter house five',
        author : 'kurt vonnegut',
        genre : 'travelling',
        summary:'Slaughterhouse-Five includes time travel, a voyage to an alien planet, a love affair with a movie star, and an assassination in its vast scope. Despite these fantastical elements, Billy Pilgrim’s odyssey reflects the mythic journey of our own fractured lives.',
    },

    "book3":{
        name : 'hound of baskerville',
        author : 'baskerville',
        genre : 'investigative',
        summary:'this work aims to dispel the confusion in daily life and clarify values.', 
    },

    "book4":{
        name : 'invisible man',
        author : 'ralph ellison',
        genre : 'comedy',
        summary:'Slaughterhouse-Five includes time travel, a voyage to an alien planet, a love affair with a movie star, and an assassination in its vast scope. Despite these fantastical elements, Billy Pilgrim’s odyssey reflects the mythic journey of our own fractured lives.',
    },
    "book5":{
        name : 'POINT COUNTER POINT',
        author : 'Aldous Huxley',
        genre : 'horror',
        summary:'Point Counter Point follows a large cast of characters, many based on people Huxley actually knew, as they argue and sleep with one another.',
    },
}

    for ( book in books) {
        console.log(book);
        if(books.hasOwnProperty(book))
        {
            var bookGenre = books[book].genre;
            console.log(bookGenre);
            if(genres.indexOf(bookGenre)==-1)
            {
                genres.push(bookGenre);
                var bookOpt = document.createElement('option');
                bookOpt.innerHTML = bookGenre;
                genreSelect.appendChild(bookOpt);
            }
        }
    }

    function genreChange(){
        var length = bookSelect.options.length;
        bookDetails.style.display = 'none';
        bookSelect.innerHTML = "<option>Select Book</option>";
        for(i=1;i<length;i++)
        {
            bookSelect.options[i]=null;
        }
        var selectedGenre = genreSelect.options[genreSelect.selectedIndex].value;
        console.log(selectedGenre);
        if(selectedGenre != "Select Genre"){
            console.log("not select genre");
            bookSelect.style.display='block';
        }
        else{
            bookSelect.style.display='none';
            }

            
        for ( book in books) {
            if(books.hasOwnProperty(book))
            {
                
                var bookGenre = books[book].genre;
                var bookName = books[book].name;
                if(bookGenre == selectedGenre)
                {
                    var Opt = document.createElement('option');
                    Opt.innerHTML = bookName;
                    bookSelect.appendChild(Opt);
                    
                }
            }
        }
    }



    function bookChange(){
        
        var selectedBook = bookSelect.options[bookSelect.selectedIndex].value;
        var bookNames = document.querySelector('#name');
        var bookAuthor = document.querySelector('#author');
        var bookGenre = document.querySelector("#genresElement");
        console.log(bookGenre);
        var bookSummary = document.querySelector('#summary');


        console.log("selected book is   "+selectedBook);
        if(selectedBook != "Select Book"){
            bookDetails.style.display='block';
           
            for ( book in books) {
                if(books.hasOwnProperty(book))
                {
                    var bookName = books[book].name;
                    if(bookName == selectedBook)
                    {
                        bookNames.innerHTML=bookName;
                        bookAuthor.innerHTML=books[book].author;
                        bookGenre.innerHTML="hello";
                        bookGenre.innerHTML=books[book].genre;
                        bookSummary.innerHTML=books[book].summary;

                    }
                }
            }
            }
            else{
                bookDetails.style.display='none';
            }
        }

    