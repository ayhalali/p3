
const pound = (x) => { return x * 0.453592 }

const poundtokilo = new Vue({
  el: '#poundtokilo',
  data: {
    guest: 'Ali',
    firstNumber: 20,
  },
  computed: {
    gtol: function () {
      const i = parseFloat(this.firstNumber)
      return `${this.guest}, ${i} lb = ${pound(i).toFixed(2)} kgs`
    }
  }
})