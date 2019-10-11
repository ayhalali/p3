const totalnum = (x, j) => {      
    let sum = 0;

    for(i = x; i <= j; i = i+1){
        sum += i;
    }

    return sum;
}

const totalnums = new Vue({
  el: '#totalnums',
  data: {
    guest: 'Ali',
    firstNumber: 1,
    secondNumber: 10
  },
  computed: {
    total: function () {
      let sum = 0
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, The sum from ${i} to ${j} inclusive is ${totalnum(i, j)}`
    }
  }
})