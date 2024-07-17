let nome = prompt ("Antes de começarmos nossa aventura, diga seu nome");
console.log(nome);

let raça = prompt ("E diga támbem, a qual raça pertence");
console.log(raça);
 
let reino = prompt ("Diga o nome de seu reino");
console.log(reino);

alert (`Os Deuses comentaram sobre sua chegada ${nome}, um viajante ${raça}, do reino de ${reino}, bem vindo ao calabouso do mago Strindt`);
alert ("Os Deuses me disseram que viria, mas não disseram o motivo, também não me interessa, seja por ouro, conhecimento, curiosidade apenas ou senso de aventura, isso só diz respeito a voce, talvez com o decorrer da jornada sua motivação mude");
alert (`Bom já me estendi muito, aqui ${nome}, depois dessa porta voce verá o inferno, lutará contra demonios, armardilhas mortais, monstros famintos e talvez outros perigos`);
alert ("No entanto um tesouro o aguarda no final, algo que mudará para sempre sua vida");
alert (`Boa sorte ${nome} de ${reino}, que os Deuses te guiem`);

let lado1 = "esquerda";
let lado2 = "direita";
let lado3 = "frente";
let lado4 = "atrás";
let escolha1 = "aceitar";
let escolha2 = "rejeitar";
let decisão;
let direções;

alert ("Ao passar da porta voce se depara com um abismo, e nesse abismo exitem 3 pontes, dando a 3 opções de caminhos diferente, um pela esquerda, pela direta e um em frente");

while(true){
    direções = prompt ("Escolha sabiamente apenas 1 desses caminhos é o correto");
   
    if(direções == lado1) {
        alert ("Voce escolheu sabiamente, pode prosseguir");
        alert ("Ao continuar sua caminhada voce chega a uma sala, uma sala grande e totalmente branca");
        alert ("Nessa sala voce encontra um mago, que lhe oferece uma poção, o mago lhe diz");
        alert ("Jovem viajante, ter escolhido a ponte correta prova que voce é abençoado e amado pelos Deuses, voce não faz ideia das maldições que tem evitado");
          decisão = prompt ("Como prova do amor dos Deuses a voce, aceite essa poção, ela lhe dará benefícios no longo da sua jornada(digite rejeitar ou aceitar)");
            
            if (decisão == escolha1) {
                alert("Sábia escolha meu jovem");
                alert("Voce se despede do mago e sai da sala, ao continuar tudo fica completamente escuro");
                alert("E voce acaba tropeçando e caindo voce cai em algo que parece um pequeno desfiladeiro, quando voce recobra a conciencia e levanta, voce percebe que as coisas voltam a ficar claras e voce se ve em uma espécie de floresta");
             } else{
                if(decisão == escolha2) {
                alert("Irei respeitar sua escolha meu jovem");
                alert("Voce sai da sala, se despede do mago, mas antes de voce sair ele te fala");
                alert("Jovem, saiba que não ter tomado a poção ira te causar problemas, no entanto, te desejo boa sorte");
                alert("Ao sair da sala, tudo fica completamente escuro");
                alert("E voce acaba tropeçando e cai em algo que parece ser um pequeno desfiladeiro, quando voce recobra conciencia e se levanta, voce percebe que a escuridão persiste, e nisso voce percebe que a unica faísca de luz que há no local é um pequeno ponto verde");
                alert("O pequeno ponto verde te chama pelo nome e diz");
                alert(`${nome} voce chegou, estou tão feliz em te ver, venha comigo irei te mostrar um caminho que irá levar até seu objetivo`);
                   while(true) {
                     decisão = prompt("Decida se voce ira acompanhar o ponto verde digite aceitar ou rejeitar");

                     if (decisão == escolha1) {
                        alert("VENHA VENHA!!!");
                        alert("Grita o ponto verde com animação");
                    break;
                    }
                     if(decisão == escolha2) {
                        alert("Então está por sua conta");
                        alert("O ponto desaparece e voce volta ao escuro");
                    break; 
                    } 
                     else {
                        alert("Voce precisa dizer se aceita ou rejeita a oferta do ponto");
                     }
                   }
        }       else {
                alert("A sua não resposta irrita o mago, e ele lança em voce um feitiço de envelhecimento, derrepente voce se ve como um idoso sem forças que não consegue mais andar, e devido a isso voce para naquela sala e espera sua morte");
                alert("Voce está MORTO!!!");
        } 
    }
        break;
    } if(direções == lado2) {
        alert ("Voce acaba de entrar em uma sala, e nessa sala voce se depara com uma sombra, e instantes depois de encara-lá, voce contempla o vazio completo da sua alma e se joga do abismo");
        alert ("Voce está MORTO!!!")
        break;
    }   
      if(direções == lado3) {
        alert ("Voce encontra uma pequena jovem, e ela diz algumas palavras, e essas palavras te levam a um reino magico e feliz, e ali voce decide ficar, mal sabe voce que esse é o reino dos sonhos e voce nunca mais ira acordar");
        alert ("Voce está MORTO!!!")
        break;
    } else {
        alert("Viajante voce deve escolher uma direção apenas")
    }
}

