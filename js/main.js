
// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');


// Variable
var showhide = document.getElementById('showmore');
var readMore = document.getElementById('readmore');
var lyrics1 = document.getElementById('lyrics1');
var lyrics2 = document.getElementById('lyrics2');
var lyrics3 = document.getElementById('lyrics3');
var lyrics4 = document.getElementById('lyrics4');
var lyrics5 = document.getElementById('lyrics5');
var lyrics6 = document.getElementById('lyrics6');

// Event Listener
showhide.addEventListener('click', showMore);

// Menu
// Function
function openMenu(){
    document.getElementById('openmenu').classList.add('shownav');
    document.getElementById('open').style.display='none';
}

function closeMenu(){
    document.getElementById('openmenu').classList.remove('shownav');
    document.getElementById('open').style.display='block';
}


// Read more
function showMore(){
    if(readMore.style.display == 'none')
    readMore.style.display = 'block';
    else
    readMore.style.display = 'none';
}

// Lyrics
function showLyrics1(){
    if(lyrics1.style.display == 'none')
    lyrics1.style.display = 'flex';
    else
    lyrics1.style.display = 'none';
}
function showLyrics2(){
    if(lyrics2.style.display == 'none')
    lyrics2.style.display = 'flex';
    else
    lyrics2.style.display = 'none';
}
function showLyrics3(){
    if(lyrics3.style.display == 'none')
    lyrics3.style.display = 'flex';
    else
    lyrics3.style.display = 'none';
}
function showLyrics4(){
    if(lyrics4.style.display == 'none')
    lyrics4.style.display = 'flex';
    else
    lyrics4.style.display = 'none';
}
function showLyrics5(){
    if(lyrics5.style.display == 'none')
    lyrics5.style.display = 'flex';
    else
    lyrics5.style.display = 'none';
}
function showLyrics6(){
    if(lyrics6.style.display == 'none')
    lyrics6.style.display = 'flex';
    else
    lyrics6.style.display = 'none';
}