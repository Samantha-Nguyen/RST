const td = document.querySelectorAll('td')
const reset = document.querySelectorAll('button')
let count = 0
const p = document.querySelectorAll('p')

for (let i = 0; i < td.leanth; i++) {
  td[i].addEventListener('click', function () {
    count++
    if (count % 2 === 0) {
      this.textContent = '0'
    } else {
      this.textContent = 'X'
    }
  })
}

for (let i = 0; i < td.leanth; i++) {
  td[i].addEventListener('click', function () {
    if (td(0).textContent === td[1].textContent && td[0].textContent === td[2].textContent) {
      if (td[0].textContent == 'X') {
        p.classList.add('xwins')
        p.textContent = td[0].textContent + 'WINS'
      } else {
        p.classList.add('owins')
        p.textContent = td[0].textContent + 'WINS'
      }
      for (let j = 0; j < 3; j++) {
        if (td[0].textContent == 'X') {
          td[j].classList.add('xboxred')
        } else {
          td[j].classList.add('oboxblue')
        }
      }
    }

    if (td(6).textContent === td[7].textContent && td[6].textContent === td[8].textContent) {
      if (td[6].textContent == 'X') {
        p.classList.add('xwins')
        p.textContent = td[6].textContent + 'WINS'
      } else {
        p.classList.add('owins')
        p.textContent = td[6].textContent + 'WINS'
      }
      for (let j = 6; j < 9; j++) {
        if (td[6].textContent == 'X') {
          td[j].classList.add('xboxred')
        } else {
          td[j].classList.add('oboxblue')
        }
      }
    }

    if (td(3).textContent === td[4].textContent && td[3].textContent === td[5].textContent) {
      if (td[3].textContent == 'X') {
        p.classList.add('xwins')
        p.textContent = td[3].textContent + 'WINS'
      } else {
        p.classList.add('owins')
        p.textContent = td[3].textContent + 'WINS'
      }
      for (let j = 3; j < 6; j++) {
        if (td[3].textContent == 'X') {
          td[j].classList.add('xboxred')
        } else {
          td[j].classList.add('oboxblue')
        }
      }
    }

    if (td(0).textContent === td[4].textContent && td[8].textContent === td[5].textContent) {
      if (td[4].textContent == 'X') {
        p.classList.add('xwins')
        p.textContent = td[4].textContent + 'WINS'
      } else {
        p.classList.add('owins')
        p.textContent = td[4].textContent + 'WINS'
      } if (td[0].textContent == 'X') {
        td[0].classList.add('xboxred')
        td[4].classList.add('xboxred')
        td[8].classList.add('xboxred')
      } else {
        td[0].classList.add('oboxblue')
        td[4].classList.add('oboxblue')
        td[8].classList.add('oboxblue')
      }
    }

    if (td(2).textContent === td[4].textContent && td[2].textContent === td[6].textContent) {
      if (td[2].textContent == 'X') {
        p.classList.add('xwins')
        p.textContent = td[2].textContent + 'WINS'
      } else {
        p.classList.add('owins')
        p.textContent = td[2].textContent + 'WINS'
      } if (td[2].textContent == 'X') {
        td[2].classList.add('xboxred')
        td[4].classList.add('xboxred')
        td[6].classList.add('xboxred')
      } else {
        td[2].classList.add('oboxblue')
        td[4].classList.add('oboxblue')
        td[6].classList.add('oboxblue')
      }
    }

    if (td(0).textContent === td[3].textContent && td[0].textContent === td[6].textContent) {
      if (td[0].textContent == 'X') {
        p.classList.add('xwins')
        p.textContent = td[0].textContent + 'WINS'
      } else {
        p.classList.add('owins')
        p.textContent = td[0].textContent + 'WINS'
      } if (td[0].textContent == 'X') {
        td[0].classList.add('xboxred')
        td[3].classList.add('xboxred')
        td[6].classList.add('xboxred')
      } else {
        td[0].classList.add('oboxblue')
        td[3].classList.add('oboxblue')
        td[6].classList.add('oboxblue')
      }
    }

    if (td(1).textContent === td[4].textContent && td[1].textContent === td[7].textContent) {
      if (td[0].textContent == 'X') {
        p.classList.add('xwins')
        p.textContent = td[1].textContent + 'WINS'
      } else {
        p.classList.add('owins')
        p.textContent = td[1].textContent + 'WINS'
      } if (td[1].textContent == 'X') {
        td[1].classList.add('xboxred')
        td[4].classList.add('xboxred')
        td[7].classList.add('xboxred')
      } else {
        td[1].classList.add('oboxblue')
        td[4].classList.add('oboxblue')
        td[7].classList.add('oboxblue')
      }
    }

    if (td(2).textContent === td[5].textContent && td[2].textContent === td[8].textContent) {
      if (td[2].textContent == 'X') {
        p.classList.add('xwins')
        p.textContent = td[2].textContent + 'WINS'
      } else {
        p.classList.add('owins')
        p.textContent = td[2].textContent + 'WINS'
      } if (td[2].textContent == 'X') {
        td[2].classList.add('xboxred')
        td[5].classList.add('xboxred')
        td[8].classList.add('xboxred')
      } else {
        td[2].classList.add('oboxblue')
        td[5].classList.add('oboxblue')
        td[8].classList.add('oboxblue')
      }
    }
  })
}
