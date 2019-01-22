var getClass = function (a, b) {
  return document.getElementsByClassName(a)[b];
}

let forms = document.forms['f1'];
let email = getClass('email', 0);
let userName = getClass('user-name', 0);
let textArea = document.getElementById('textArea');
let file = document.getElementById('file');
let btn = getClass('btn', 0);

forms.btn.addEventListener('click', () => {
  getClass('block-email', 0).innerHTML = forms.email.value;
  getClass('block-text-user', 0).innerHTML = forms.userName.value;
  getClass('block-textarea', 0).innerHTML = forms.textArea.value;
  forms.reset();
});

forms.file.addEventListener('change', function (e) {
  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();
    img.src = reader.result;
    img.style.width = 100 + '%';
    img.style.height = 100 + '%';
    getClass('block-img', 0).appendChild(img);
  }
  reader.readAsDataURL(file.files[0]);
}, false)

