let burgerbtn = document.querySelector('.menu-burger');
let mobilemenu = document.querySelector('.mobile-menu');
let hid = document.querySelector('.docBody');

burgerbtn.addEventListener('click',() => {
    burgerbtn.classList.toggle('_active-burger');
    mobilemenu.classList.toggle('_active-mobile');
    hid.classList.toggle('__hid');
});

let modalBtn = document.querySelectorAll('.showmodalBtn');
let modalOverlay = document.querySelector('.modal-overlay');
for (let k = 0; k < modalBtn.length; k++){
    modalBtn[k].addEventListener('click', () => {
        modalOverlay.classList.add('__show-modal-window')
    })
}


let modalContent = document.querySelector('.modal-content');
modalOverlay.addEventListener('click', function(e) {
  
  if (!modalContent.contains(e.target)) {
    modalOverlay.classList.remove('__show-modal-window');
  }

})

let closebtn = document.querySelector('.close-btn');
closebtn.addEventListener('click', () => {
    modalOverlay.classList.remove('__show-modal-window');
})
