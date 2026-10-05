const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "No seu primeiro dia, você se depara com o principal problema da cidade: o trânsito congestionado e a alta emissão de carbono dos veículos. Você precisa decidir onde investir o orçamento inicial de transporte.",
    alternativas: [" Investir na modernização do transporte público, criando faixas exclusivas para ônibus elétricos rápidos e ciclovias integradas.", "Subsidiar a transição de carros particulares para veículos elétricos, instalando postos de recarga rápida por toda a cidade"],
  },
  {
    enunciado:
      "A sua escolha pelo transporte público reduziu o trânsito, mas os moradores da periferia começam a reclamar do acúmulo de lixo. Os lixões estão saturados. O que fazer?",
    alternativas: [
      "Criar um programa de coleta seletiva obrigatória com incentivos fiscais para os cidadãos e financiar cooperativas de catadores locais. ",
      "Contratar uma grande empresa privada para construir uma usina de incineração moderna que transforma lixo em energia.",
    ],
  },
  {
    enunciado:
      "A transição para carros elétricos atraiu empresas de tecnologia, mas o centro da cidade sofre com o descarte ilegal de lixo eletrônico e baterias velhas. Os rios correm risco de contaminação.",
    alternativas: [
      "Implementar uma lei rígida de logística reversa, forçando as empresas de tecnologia a recolherem e reciclarem seus próprios produtos descartados.",
      "Construir um centro tecnológico estatal de reciclagem avançada e tratamento de efluentes com recursos públicos.",
    ],
  },
  {
    enunciado:
      "A cidade agora recicla e caminha para ser mais limpa, mas a demanda por energia elétrica disparou devido ao crescimento populacional. A matriz atual depende de usinas térmicas poluentes fora da cidade.",
    alternativas: [
      "Cobrir os tetos de todos os prédios públicos e habitacionais com painéis solares comunitários, distribuindo a energia de forma descentralizada.",
      "Construir um grande parque eólico na área rural vizinha, centralizando a produção de energia limpa para abastecer a rede.",
    ],
  },
  {
    enunciado:
      "Suas escolhas trouxeram eficiência econômica e controle industrial, mas os movimentos ambientalistas locais exigem o fechamento definitivo das fontes de energia fóssil que ainda restam.",
    alternativas: [
      "Ceder à pressão popular e investir em energia solar em larga escala, mesmo que isso cause um endividamento temporário nos cofres públicos.",
      " Manter a matriz mista atual para garantir a estabilidade econômica das indústrias, prometendo neutralizar o carbono através do plantio massivo de árvores.",
    ],
    },
    {
    enunciado:
      "O centro tecnológico e os carros elétricos tornaram a cidade moderna, mas a periferia continua esquecida e sofrendo com apagões frequentes pela falta de infraestrutura energética.",
    alternativas: [
      "Privatizar o setor energético da cidade, permitindo que grandes corporações tragam investimentos bilionários em energia limpa de ponta.",
      "Interromper os subsídios tecnológicos temporariamente e redirecionar a verba para criar microrredes de energia limpa voltadas para as comunidades carentes.",
    ],
  },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();