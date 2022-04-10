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
                this.main = '<img src="https://sqdsh.top/static/wow.gif">'
            }
    } 
    }

}).mount("#vue-app")