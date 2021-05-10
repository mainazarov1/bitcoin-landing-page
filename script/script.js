var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$('.burger').on('click', () => {
	$('.burger').toggleClass('burger-menu');
	$('.header__nav').toggleClass('show-menu');
})

$('.header__nav a').on('click', () => {
	$('.burger').removeClass('burger-menu');
	$('.header__nav').removeClass('show-menu');
})

