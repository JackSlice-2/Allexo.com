class HeadElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <meta name="Allexo" content="Homepage">
        <title>Allexø</title>
        <link rel="stylesheet" href="/Globals/menu/menu.css">
        <link rel="shortcut icon" type="image/icon" href="./favicon.ico"/>
        <link href="/path/to/output.css" rel="stylesheet"/>
        <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    
    </head>
    `;
  }
}

customElements.define('head-element', HeadElement);