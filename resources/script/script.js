// console.log('hello world');


let to_click_div = document.getElementById("mobile-nav-open");
let to_reveal_div = document.getElementById('to-reveal');

to_click_div.onclick = my_func;

function my_func() {
    to_reveal_div.classList.toggle('hidden-mobile');
}