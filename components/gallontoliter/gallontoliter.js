const gatolit = (x) => { return x * 3.78541 }

const gallontoliter = new Vue({
  el: '#gallontoliter',
  data: {
    guest: 'Ali',
    firstNumber: 20,
  },
  computed: {
    gatolit: function () {
      const i = parseFloat(this.firstNumber)
      return `${this.guest}, ${i} gallons = ${gatolit(i).toFixed(2)} liters`
    }
  }
})