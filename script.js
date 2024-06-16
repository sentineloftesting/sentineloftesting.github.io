const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 
  
hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

document.getElementsByClassName('btn common-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1v7i_zhFws1bw8ajX6s4ZWJ8zjVOZ2s9c/view?usp=drive_link';
    link.download = 'filename.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



