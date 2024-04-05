const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductFeatures = document.querySelectorAll(".featureDesc");

const products = [
  {
    id: 1,
    title: "Gateway",
    desc: `A linha de gateways ALX-1000 foi projetada para ser totalmente modular visando atender a grande variedade de aplicações
    de telemetria de máquinas, equipamentos e processos. Com diversas opções de conectividade e ampla capacidade modular com
    entradas e saídas digitais e analógicas incorporadas, o gateway ALX-1000 pode ao mesmo tempo comunicar com dispositivos que
    possuam comunicação MODBUS RTU, MODBUS TCP/IP e receber sinais de sensores discretos de campo.
    Utilizando protocolo MQTT para envio de dados criptografados, o gateway ALX-1000 funciona como um datalogger registrando em
    memória de massa os dados coletados mesmo quando a comunicação com o servidor está indisponível, enviando sincronamente
    os dados registrados após a restabelecimento da comunicação.
    Possui bateria interna de lítio recarregável que permite o funcionamento em caso de falta de energia com envio automático de alerta
    em caso de falha na alimentação externa.`,
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
        img: "../image/products/productsHardwareSecondary.webp",
      }
    ],
    images: [
      "../image/products/productsHardwareDetail1.webp",
      "../image/products/productsHardwareDetail2.webp",
      "../image/products/productsHardwareDetail3.webp",
      "../image/products/productsHardwareDetail4.webp",
    ]
  },
  {
    id: 2,
    title: "IOTHINGS",
    desc: `A plataforma IoTHINGS foi desenvolvida para ser um portal de automação IoT concentrando informações de diversos tipos de modelos de equipamentos de diferentes fabricantes em uma única solução.
    Utilizando algoritmos de Inteligência Artificial e Machine Learning a plataforma IoTHINGS analisa em tempo real os dados coletados
    gerando avisos e alarmes quando alguma condição anormal é detectada enviando mensagens por e-mail, SMS, Telegram e Whatsapp.
    Possibilita a criação de dashboards personalizados para cada usuário de acordo com as informações de interesse, permitindo ainda o envio de telecomandos para os equipamentos de campo caso o usuário tenha permissão de acordo com o seu perfil.`,
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
        img:  "../image/products/productsSoftwareSecondary.webp",
      }
    ],
    images: [
      "../image/products/productsHardwareDetail1.webp",
      "../image/products/productsHardwareDetail1.webp",
      "../image/products/productsHardwareDetail1.webp",
      "../image/products/productsHardwareDetail1.webp",
    ]
  }
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductFeatureTitles = document.querySelectorAll(".featureTitle");
const currentProductFeatureIcons = document.querySelectorAll(".featureIcon");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.desc;

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

    // change images of currentProduct
    const productImages = document.querySelectorAll(".product-image");
    productImages.forEach((img, imgIndex) => {
      img.src = choosenProduct.images[imgIndex];
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


