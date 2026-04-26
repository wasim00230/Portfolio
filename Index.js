function setActive(clickedBtn){
  let buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => btn.classList.remove('active-btn'));
  clickedBtn.classList.add('active-btn');
}