import "./appbar.css"

class AppBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Ghibli's Movie</span>
         </nav>
        `
    }
}
customElements.define("app-bar",AppBar)