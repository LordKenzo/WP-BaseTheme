window.onscroll = function () {
  handleScrollWindow();
};

function handleScrollWindow() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById('footer').className = '';
    document.getElementById('informazioni').className = 'footer-info';
    document
      .getElementsByClassName('footer-divider')[0]
      .classList.remove('d-none');
  } else {
    document.getElementById('footer').className = 'fixed';
    document.getElementById('informazioni').className = 'd-none';
    document
      .getElementsByClassName('footer-divider')[0]
      .classList.add('d-none');
  }
}
