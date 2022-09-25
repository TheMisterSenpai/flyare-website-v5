Vue.createApp({
    data() {
        return {
            main: '<img src="https://media.discordapp.net/attachments/955380182238261281/1023594406563020930/Frame_4.png" alt="" class="greeting-emoji"><div class="greeting-text" id="greeting-text">Hi, I am <b class="greeting-b">flyarrree</b></div>',
            theme: "black",
            themeIcon: '<i class="fa-solid fa-sun"></i>'
        }
    },
    methods: {
        returnGif() {
            let greeting = document.getElementById("greeting-text")
            if (greeting.innerText == "Hi, I am flyarrree") {
                this.main = '<img class="vay-ogo" src="https://c.tenor.com/e1HuI8meyEMAAAAC/лядов-вау.gif">'
            }
    }, 
    // setTheme() {
    //   if(this.theme == 'black') {
    //     document.documentElement.style.setProperty("--background-color", "#CECECE")
    //     document.documentElement.style.setProperty("--text-color", "#2f3136")
    //     document.documentElement.style.setProperty("--server-color", "#A7A7A7")
    //     document.documentElement.style.setProperty("--bx-shdw", "0 0 10px #a5a5a5")
    //     this.theme = "white"
    //     this.themeIcon = '<i class="fa-solid fa-moon-stars"></i>' 
    //   } else {
    //     document.documentElement.style.setProperty("--background-color", "#2F3136")
    //     document.documentElement.style.setProperty("--text-color", "rgb(212, 212, 212)")
    //     document.documentElement.style.setProperty("--server-color", "#25272b")
    //     document.documentElement.style.setProperty("--bx-shdw", "0 0 10px #16171a")
    //     this.theme = "black"
    //     this.themeIcon = '<i class="fa-solid fa-sun"></i>'
    //   }

    //   }  
    }

}).mount("#vue-app")

