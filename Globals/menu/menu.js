function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }

class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav id='menu'>
          <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/pages/products.html'>Produtos</a></li>
            <li><a href='/pages/solutions.html'>Soluções</a></li>
            <li><a href='/pages/about.html'>Sobre</a></li>
            <li><a href='/pages/contact.html'>Contato</a></li>
            <li><a href='/pages/newsLetter.html'>Newsletter</a></li>
            <li id="iot-li">
              <a href='http://iot.allexo.com.br' target="_blank" >IoTHINGS Login</a></li>
          </ul>
        </nav>
        <div>
          <img src="/image/Logo.webp" class="logo">
        </div>
      </header>
    `;
  }
}

customElements.define('header-element', HeaderElement);




function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}
