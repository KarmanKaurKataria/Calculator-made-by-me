let string = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        console.error('Invalid input:', error);
        document.querySelector('input').value = 'Error';
      }
    } else if (e.target.innerHTML === 'AC') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});