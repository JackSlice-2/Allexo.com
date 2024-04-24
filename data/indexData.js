    const components = [
    {
       title: "Gerenciamento Remoto de Dispositivos",
       topic: "Monitore remotamente máquinas e equipamentos em qualquer lugar do mundo.",
       description: "As soluções de telemetria da Allexo permitem monitorar máquinas e equipamentos de forma remota através de comunicação utilizando diversos protocolos de mercado. Mesmo máquinas mais antigas pode receber a solução Allexo de telemetria para coleta de informações de funcionamento através da instalação de sensores tradicionais de mercado.",
       image: "image/homeBGImg1.webp",
       buttons: [
        { label: "Saiba Mais", href: "./modals/remoteManegement.html" },
        { label: "Newsletter", href: "./pages/newsLetter.html" },
       ]
    },
    {
        title: "Gestão Industrial",
        topic: "Gerencie o que acontece no seu chão-de-fábrica.",
        description: "Monitore em tempo real o funcionamento de máquinas e equipamentos no chão-de-fábrica gerando dados estatísticos de produtividade e paradas de máquinas. Gerencie os principais indicadores de desempenho, disponibilidade e qualidade de suas instalações com geração automática de KPIs.",
        image: "image/homeBGImg5.webp",
        buttons: [
         { label: "Saiba Mais", href: "./modals/industrialManegement.html" },
         { label: "Newsletter", href: "./pages/newsLetter.html" },
        ]
    },
    {
        title: "Telemetria de Geradores",
        topic: "Gerencie remotamente sua frota de geradores.",
        description: "Monitore em tempo real o funcionamento de sua frota recebendo automaticamente alertas quando algum problema ou mau funcionamento for detectado.  Saiba quando e por quanto tempo o gerador entrou em funcionamento e acompanhe o histórico de desempenho de cada máquina individualmente. Compartilhe com os seus clientes a monitoração dos geradores locados através acesso exclusivo via celular.",
        image: "image/homeBGImg2.webp",
        buttons: [
            { label: "Saiba Mais", href: "./modals/generatorTelemetry.html" },
            { label: "Newsletter", href: "./pages/newsLetter.html" },
        ]
    },
    {
        title: "Saneamento",
        topic: "Telemetria de reservatórios e estações de bombeamento.",
        description: "A Allexo possui uma grande variedade de gateways com entradas e saídas, digitais e analógicas para interface com sensores de nível, vazão, temperatura e demais grandezas de processo. Possuímos módulos inteligentes com interfaces WiFi, ETHERNET e RS232/RS485 para comunicação em alto nível com inversores de frequência, medidores mássicos, analisadores de qualidade de água, entre outros dispositivos, utilizando os mais diversos protocolos de comunicação de mercado.",
        image: "image/homeBGImg3.webp",
        buttons: [
            { label: "Saiba Mais", href: "./modals/sanitation.html" },
            { label: "Newsletter", href: "./pages/newsLetter.html" },
        ]
    },
    {
        title: "Gestão de Energia",
        topic: "Soluções de monitoração de consumo e geração de energia",
        description: "Através da plataforma IoTHINGS acompanhe em tempo real o perfil de consumo de suas instalações com rateio por máquinas e equipamentos bem como a produção de energia de suas plantas fotovoltaicas. Verifique se o seu contrato com a concessionária está adequado bem como receba do módulo de Inteligência Artificial de nossa plataforma sugestões para reduzir o custo da energia ou evitar pagar multa por demanda ou baixo fator de potência.",
        image: "image/homeBGImg4.webp",
        buttons: [
            { label: "Saiba Mais", href: "./modals/energyManegement.html" },
            { label: "Newsletter", href: "./pages/newsLetter.html" },
        ]
    }
];




function createComponentHTML(component) {
 return `
    <div class="item">
      <img alt="" src="${component.image}">
      <div class="content">
        <div class="title">${component.title}</div>
        <div class="topic" id="topic">${component.topic}</div>
        <div class="des">${component.description}</div>
        <div class="buttons">
          ${component.buttons.map(button => `<button aria-label="${button.label}" type="button" onclick="window.location.href='${button.href}';">${button.label}</button>`).join('')}
        </div>
      </div>
    </div>
 `;
}





// app.js
document.addEventListener('DOMContentLoaded', () => {
 const listContainer = document.querySelector('.list');
 components.forEach(component => {
    const componentHTML = createComponentHTML(component);
    listContainer.innerHTML += componentHTML;
 });
});
