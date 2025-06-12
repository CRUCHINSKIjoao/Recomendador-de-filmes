let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("gray");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Batman: o cavaleiro das trevas";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Harry Potter e cálice de fogo";          
        } else{
         return "O senhor dos anéis: a sociedade do anel";
        }
      } else {
        if (gostaDeFantasia) {
          return "Shrek";
        } else {
          return "A fantástica fábrica de chocolate";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "Pokémon: o filme 2000 ";
    }
  }
}
