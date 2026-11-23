const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "No seu primeiro dia, você se depara com o principal problema da cidade: o trânsito congestionado e a alta emissão de carbono dos veículos. Você precisa decidir onde investir o orçamento inicial de transporte.",
    alternativas: [
      " Investir na modernização do transporte público, criando faixas exclusivas para ônibus elétricos rápidos e ciclovias integradas.",
      "Subsidiar exclusivamente carros particulares elétricos e abandonar investimentos no transporte coletivo.",
      "Ampliar calçadas e criar zonas de baixo tráfego para incentivar deslocamentos a pé e de bicicleta.",
    ],
    gameOver: 1,
    continuar: 0,
    rotaAlternativa: 2,
  },
  {
    enunciado:
      "A sua escolha pelo transporte público reduziu o trânsito, mas os moradores da periferia começam a reclamar do acúmulo de lixo. Os lixões estão saturados. O que fazer?",
    alternativas: [
      "Criar um programa de coleta seletiva obrigatória com incentivos fiscais para os cidadãos e financiar cooperativas de catadores locais. ",
      "Contratar uma grande empresa privada para construir uma usina de incineração moderna que transforma lixo em energia.",
      "Implantar compostagem comunitária e ampliar a coleta de resíduos orgânicos nos bairros.",
    ],
    gameOver: 1,
    continuar: 0,
    rotaAlternativa: 2,
  },
  {
    enunciado:
      "A transição para carros elétricos atraiu empresas de tecnologia, mas o centro da cidade sofre com o descarte ilegal de lixo eletrônico e baterias velhas. Os rios correm risco de contaminação.",
    alternativas: [
      "Implementar uma lei rígida de logística reversa, forçando as empresas de tecnologia a recolherem e reciclarem seus próprios produtos descartados.",
      "Ignorar o descarte ilegal e permitir que baterias velhas continuem contaminando os rios.",
      "Criar pontos de coleta de eletrônicos nos bairros e campanhas para conserto e reuso de aparelhos.",
    ],
    gameOver: 1,
    continuar: 0,
    rotaAlternativa: 2,
  },
  {
    enunciado:
      "A cidade agora recicla e caminha para ser mais limpa, mas a demanda por energia elétrica disparou devido ao crescimento populacional. A matriz atual depende de usinas térmicas poluentes fora da cidade.",
    alternativas: [
      "Cobrir os tetos de todos os prédios públicos e habitacionais com painéis solares comunitários, distribuindo a energia de forma descentralizada.",
      "Construir um parque eólico sem avaliar os impactos ambientais, destruindo habitats na área rural.",
      "Reduzir o consumo com melhorias de eficiência energética em prédios e iluminação pública.",
    ],
    gameOver: 1,
    continuar: 0,
    rotaAlternativa: 2,
  },
  {
    enunciado:
      "Suas escolhas trouxeram eficiência econômica e controle industrial, mas os movimentos ambientalistas locais exigem o fechamento definitivo das fontes de energia fóssil que ainda restam.",
    alternativas: [
      "Ceder à pressão popular e investir em energia solar em larga escala, mesmo que isso cause um endividamento temporário nos cofres públicos.",
      " Manter a matriz mista atual para garantir a estabilidade econômica das indústrias, prometendo neutralizar o carbono através do plantio massivo de árvores.",
      "Planejar o fechamento gradual das fontes fósseis, com apoio para trabalhadores e metas de energia renovável.",
    ],
    gameOver: 1,
    continuar: 2,
    rotaAlternativa: 0,
  },
  {
    enunciado:
      "O centro tecnológico e os carros elétricos tornaram a cidade moderna, mas a periferia continua esquecida e sofrendo com apagões frequentes pela falta de infraestrutura energética.",
    alternativas: [
      "Privatizar a energia e deixar os bairros periféricos sem acesso confiável para priorizar o lucro das empresas.",
      "Interromper os subsídios tecnológicos temporariamente e redirecionar a verba para criar microrredes de energia limpa voltadas para as comunidades carentes.",
      "Criar um programa público de eficiência energética e baterias comunitárias para reduzir os apagões.",
    ],
    gameOver: 0,
    continuar: 1,
    rotaAlternativa: 2,
  },
];

let atual = 0;
let posicaoNoCaminho = 0;
let caminhoAtual = [];
let perguntaAtual;
let atalhoDe = null;
const caminhos = {
  comunitario: [0, 1, 2, 3, 5],
  tecnologia: [0, 3, 4, 2, 5],
};

const botaoReiniciar = document.createElement("button");
botaoReiniciar.textContent = "Começar do início";
botaoReiniciar.addEventListener("click", reiniciaJogo);

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  const avisoAtalho =
    atalhoDe === null
      ? ""
      : `Atalho: pulou da pergunta ${atalhoDe + 1} para a ${atual + 1}. `;
  caixaPerguntas.textContent = `${avisoAtalho}Pergunta ${atual + 1} de ${perguntas.length}. ${perguntaAtual.enunciado}`;
  atalhoDe = null;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraEscolhaDeCaminho() {
  caixaPerguntas.hidden = false;
  caixaAlternativas.hidden = false;
  caixaResultado.hidden = true;
  caixaPerguntas.textContent = "Escolha o caminho que deseja seguir:";
  caixaAlternativas.textContent = "";
  criaBotaoCaminho(
    "Caminho comunitário: transporte público e ações locais",
    "comunitario",
  );
  criaBotaoCaminho(
    "Caminho tecnológico: energia e inovação",
    "tecnologia",
  );
}

function criaBotaoCaminho(texto, caminho) {
  const botao = document.createElement("button");
  botao.textContent = texto;
  botao.addEventListener("click", function () {
    caminhoAtual = caminhos[caminho];
    posicaoNoCaminho = 0;
    atalhoDe = null;
    atual = caminhoAtual[posicaoNoCaminho];
    mostraPergunta();
  });
  caixaAlternativas.appendChild(botao);
}

function mostraResultado() {
  mostraFim("Você fez sua parte e tornou o mundo um lugar melhor.");
}

function mostraGameOver() {
  mostraFim("Game over");
}

function mostraFim(mensagem) {
  caixaPerguntas.hidden = true;
  caixaAlternativas.hidden = true;
  caixaAlternativas.textContent = "";
  textoResultado.textContent = mensagem;
  caixaResultado.appendChild(botaoReiniciar);
  caixaResultado.hidden = false;
}

function reiniciaJogo() {
  atual = 0;
  posicaoNoCaminho = 0;
  caminhoAtual = [];
  atalhoDe = null;
  mostraEscolhaDeCaminho();
}

caixaResultado.hidden = true;
mostraEscolhaDeCaminho();

function mostraAlternativas() {
  for (const [indice, alternativa] of perguntaAtual.alternativas.entries()) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    botaoAlternativas.addEventListener("click", function () {
      if (indice === perguntaAtual.gameOver) {
        mostraGameOver();
        return;
      }

      const perguntaAnterior = atual;
      const usouAtalho = indice === perguntaAtual.rotaAlternativa;
      posicaoNoCaminho += usouAtalho ? 2 : 1;
      if (posicaoNoCaminho >= caminhoAtual.length) {
        mostraResultado();
        return;
      }

      atual = caminhoAtual[posicaoNoCaminho];
      atalhoDe = usouAtalho ? perguntaAnterior : null;
      mostraPergunta();
    });
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
