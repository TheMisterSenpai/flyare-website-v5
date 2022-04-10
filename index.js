Vue.createApp({
    data() {
        return {
            main: '<img src="logo.jpg" alt="" class="greeting-emoji"><div class="greeting-text" id="greeting-text">Hi, I am <b class="greeting-b">flyarrree</b></div>'
        }
    },
    methods: {
        returnGif() {
            let greeting = document.getElementById("greeting-text")
            if (greeting.innerText == "Hi, I am flyarrree") {
                this.main = '<img class="vay-ogo" src="https://sqdsh.top/static/wow.gif">'
            }
    } 
    }

}).mount("#vue-app")

document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { 
      const el = document.querySelector('.follow-cursor') 
  
      window.addEventListener('mousemove', e => { 
        const target = e.target 
        if (!target) return
  
        if (target.closest('a')) { 
          el.classList.add('follow-cursor_active') 
        } else { // иначе
          el.classList.remove('follow-cursor_active') 
        }
  
        el.style.left = e.pageX + 'px' 
        el.style.top = e.pageY + 'px' 
      })
    }
  
    followCursor() 
  
  })