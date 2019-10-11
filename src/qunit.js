const addnumbers = (x, y) => { return x + y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity();
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  }
  else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithAdd = async (event) => {
  document.querySelector('#addingresult').innerHTML = '';
  if (document.querySelector('#NumberOne').checkValidity() && document.querySelector('#NumberTwo').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guestname').value.replace(regex, '')
    const i = parseInt(document.querySelector('#NumberOne').value)
    const j = parseInt(document.querySelector('#NumberTwo').value)
    const ans = `${s}, your sum is ${addnumbers(i, j)}.`
    document.querySelector('#addingresult').innerHTML = ans
  }
}


// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if (event.target && event.target.id === 'NumberOne' ||
    event.target && event.target.id === 'NumberTwo') {
    validate(event)
  }
});

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
});

