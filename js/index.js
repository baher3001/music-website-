// set..  btn 
let icon = document.querySelector('nav i');

icon.addEventListener('click',()=>{
    document.querySelector('nav .ul ').classList.toggle('active');


}); 
// selectors 
let logo = document.getElementById('logo');
let title = document.getElementById('title');
let Play = document.getElementById('play');
let Next = document.getElementById('next');
let Back = document.getElementById('back');
let Duration = document.getElementById('duration');
let sound = document.getElementById('sound');
let Rate = document.getElementById('rate');
let play_song = false;
let index_no = 0;

/// CREATE AUDIO 
let Track = document.createElement('audio');
/// songs 
let Songs = [
    {   
        path:"../music/Kalimba.mp3",
        image:"../img/music.jpg",
        title:"Kalimba"

    },
    {   
        path:"../music/Maid with the Flaxen Hair.mp3",
        image:"../img/music2.jpg",
        title:"Maid with the Flaxen Hair"

    },

    {   
        path:"../music/Sleep Away.mp3",
        image:"../img/music3.jpg",
        title:"Sleep Away"

    }

];


////FUNCTIONS 

function load_track(index_no)
{
    title.innerHTML = Songs[index_no].title;
    Track.src = Songs[index_no].path;
    logo.src = Songs[index_no].image;
    Track.load();
}

load_track(index_no);


// play btn 
Play.addEventListener('click',()=>{
    if(play_song==false)
    {
        playing();
    }
    else
    {
        pausing();
    }


});



function playing()
{
    Track.play();
    Play.innerHTML = "<i class='fa fa-pause'> </i>";
    play_song=true;
}


function  pausing()
{
    Track.pause();
    Play.innerHTML = "<i class='fa fa-play'> </i>";
    play_song=false;

}

// end play btn 
// next btn
Next.addEventListener('click',()=>{
if(index_no< Songs.length-1)
{
    index_no+=1;
    load_track(index_no);
    playing();
}
else
{
    index_no=0;
    load_track(index_no);
    playing();
}


});


// end next btn 
// back btn 
Back.addEventListener('click',()=>{
if(index_no>0)
{
    index_no-=1;
    load_track(index_no);
    playing();
}
else
{
    index_no = Songs.length;
    load_track(index_no);
    playing();
}



});


//  end back btn 
// duration btn 
Duration.addEventListener('change',()=>{

    let position = Track.duration*(duration.value/100);
    Track.currentTime = position; 


});

// end duration btn 
// sound btn 
sound.addEventListener('change',()=>{

    Track.volume = sound.value/100;


});
// end sound btn 

// rate btn
Rate.playbackRate=1; 
Rate.addEventListener('change',()=>{

  

    Track.playbackRate = Rate.value/100;


});
// end rate btn 