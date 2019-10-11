const avg = (x, y, z) => { return (x + y + z)/ 3 }

const average = new Vue({
  el: '#avg',
  data: {
    guest: 'Ali',
    firstNumber: 90,
    secondNumber: 95,
    thirdNumber: 80
  },
  computed: {
    avgResult: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      const f = parseInt(this.thirdNumber)
      return `${this.guest}, your average is ${avg(i, j, f).toFixed(2)}`
    }
  }
})