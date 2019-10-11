const addition = (x, y, z) => { 
  let sum = x * (1+ y/100)
  sum -= sum * (z/100)  
  return  sum
}

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Ali',
    firstNumber: 100,
    secondNumber: 5.5,
    thirdNumber: 0
  },
  computed: {
    addresult: function () {
      const i = parseFloat(this.firstNumber)
      const j = parseFloat(this.secondNumber)
      const f = parseFloat(this.thirdNumber)
      return `${this.guest}, sum amount is $${addition(i, j, f).toFixed(2)}`
    }
  }
})