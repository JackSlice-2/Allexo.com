const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductFeatures = document.querySelectorAll(".featureDesc");

const products = [
  {
    id: 1,
    title: "Gateway",
    price: 0,
    features: [
      {
        title: "Redes de Campo",
        desc: "Portas de comunicação RS-232, RS-485 e ETHERNET para conexão a dispositivos de campo utilizando protocolo MODBUS-RTU e TCP/IP",
        icon: "bi bi-ethernet"
      },
      {
        title: "Ampla conectividade",
        desc: "Gateways com capacidade de conexão via rede WiFi, ETHERNET cabeada, 2G, 3G, 4G, Lora e satélite via Starlink",
        icon: "bi bi-cloud-download"
      },
      {
        title: "Modularidade de IO's",
        desc: "Diversas combinações de módulos para interface com sensores de campo com entradas e saídas digitais e analógicas",
        icon: "bi bi-share"
      },
      {
        title: "Comunicação segura",
        desc: "Envio de dados usando protocolo criptografado MQTT garantindo a segurança dos dados.",
        icon: "bi bi-lock"
      },
    ],
    colors: [
      {
        img: "./img/air.png",
      }
    ],
  },
  {
    id: 2,
    title: "IOTHINGS",
    price: 149,
    features: [
      {
        title: "Gestão de Energia",
        desc: "Ferramentas para gestão de consumo e geração de energia elétrica.",
        icon: "bi bi-plug"
      },
      {
        title: "Alarmes Personalizados",
        desc: "Envio de alarmes personalizados por e-mail, SMS ou Telegram.",
        icon: "bi-alarm"
      },
      {
        title: "IA e Machine Learning",
        desc: "Ferramentas de Inteligência Artificial e Machine Learning para análise dos dados.",
        icon: "bi bi-robot"
      },
      {
        title: "Telecomandos",
        desc: "Envio de comandos e parâmetros para os dispositivos monitorados.",
        icon: "bi bi-keyboard"
      }
    ],
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  }
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductFeatureTitles = document.querySelectorAll(".featureTitle");
const currentProductFeatureIcons = document.querySelectorAll(".featureIcon");


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });

    // update features
    currentProductFeatures.forEach((feature, index) => {
      feature.textContent = choosenProduct.features[index].desc;
    });

    // update feature titles
    currentProductFeatureTitles.forEach((featureTitle, index) => {
      featureTitle.textContent = choosenProduct.features[index].title;
    });

    // update feature icons
    currentProductFeatureIcons.forEach((featureIcon, index) => {
      featureIcon.className = choosenProduct.features[index].icon + " featureIcon";
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
