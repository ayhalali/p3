const res = (x) => { return (5/9) * (x - 32) }

const fToc = new Vue({
  el: '#celtofeh',
  data: {
    guest: 'Ali',
    firstNumber: 32
  },
  computed: {
    fcresult: function () {
      const i = parseInt(this.firstNumber)
      if (i >= 0 || i <= 0){
        if (i <= 32){
          return `${this.guest}, ${i} F is ${Math.round(res(i))} C, it is freezing`
        }
        else
          return `${this.guest}, ${i} F is ${Math.round(res(i))} C`      
      }
      else 
      {
        return `Invalid input`
      }
    }
  }
})


