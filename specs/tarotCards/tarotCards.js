
// video.addEventListener('ended', function() {
//     video.style.display = 'none';
//     button.style.display = 'none';
// });

// function handleButtonClick() {
//     var video = document.getElementById("video-player");
//     video.play();
//     var button = document.getElementById("start-button");
//     var imageElement = document.getElementById('image');
//     imageElement.src = '../images/computer-screen.png';
    
// }

// var video = document.getElementById("video-player");
// var button = document.getElementById("start-button");

// video.addEventListener('ended', function() {
//     video.style.display = 'none';
//     button.style.display = 'none';
// });

// function handleButtonClick() {
//     video.play();

//     video.addEventListener('play', function() {
//         var imageElement = document.getElementById('image');
//         imageElement.src = '../images/computer-screen.png';

//         button.style.display = 'none';
//     }, { once: true });
// }





function handleButtonClick() {
    var video = document.getElementById("video-player");
    var button = document.getElementById("start-button");
    var imageElement = document.getElementById('image');
    imageElement.src = '../images/computer-screen.png';
    video.play();
    button.style.display = 'none';
    video.addEventListener('ended', function() {
        video.style.display = 'none';
        
        imageElement.src = '../images/computer-screen.png';
    });
}

