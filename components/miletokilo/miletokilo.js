const miletokilo = (x) => { return x * 1.60934 }

const mtok = new Vue({
  el: '#miletokilo',
  data: {
    guest: 'Ali',
    firstNumber: 65,
  },
  computed: {
    mtok: function () {
      const i = parseFloat(this.firstNumber)
      return `${this.guest}, ${i} MPR is ${miletokilo(i).toFixed(2)} KPR`
    }
  }
})