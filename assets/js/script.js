// Select Elements
const mainNav = document.getElementById('main-nav');
const asideNav = document.getElementById('aside-nav');
const openNavBtn = document.getElementById('open-nav');
const closeNavBtn = document.getElementById('close-nav');

const li_1 = document.querySelector('#main-nav > ul li:first-of-type');
const li_2 = document.querySelector('#main-nav > ul li:nth-of-type(2)');
const li_3 = document.querySelector('#main-nav > ul li:nth-of-type(3)');
const li_4 = document.querySelector('#main-nav > ul li:nth-of-type(4)');
const li_5 = document.querySelector('#main-nav > ul li:last-of-type');


function handelOpenNavbar() {
  asideNav.classList.toggle('left-250');
  mainNav.classList.toggle('left-0');
  openNavBtn.classList.add('hide');
  closeNavBtn.classList.remove('hide');
}

function handelCloseNavbar() {
  asideNav.classList.toggle('left-250');
  mainNav.classList.toggle('left-0');
  closeNavBtn.classList.add('hide');
  openNavBtn.classList.remove('hide');
}

function handelLiAnimation() {
  li_1.classList.toggle('li-animation-1');
  li_2.classList.toggle('li-animation-2');
  li_3.classList.toggle('li-animation-3');
  li_4.classList.toggle('li-animation-4');
  li_5.classList.toggle('li-animation-5');
}

openNavBtn.addEventListener('click', function () {
  handelOpenNavbar();
  handelLiAnimation()
});

if (closeNavBtn) {
  closeNavBtn.addEventListener('click', function () {
    handelCloseNavbar();
    handelLiAnimation()
  });
}
