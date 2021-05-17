// This connects the "START" button to the play function
document.getElementById('start').addEventListener('click', play)
document.getElementById('enter').addEventListener('click', enter)

// This brings the user to another page (index2.html) when the "START" button is clicked
function play () {
  window.location.href = 'index2.html'
}

function enter () {
  document.body.style.backgroundColor = '#39f'
}
