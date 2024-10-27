//Usando Class

class heroiAventura{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    //Usando Metodo

    atacar (){
        let ataque;
        //Estrutura de condição

        if (this.tipo === "Ninja"){
            ataque = "usando shuriken";
        }
        else if (this.tipo === "Guerreiro"){
            ataque = "usando espada";
        }
        else if (this.tipo === "Monge"){
            ataque = "usando artes marciais";
        }
        else if (this.tipo === "Mago"){
            ataque = "usando magia";
        }
        return `O ${this.tipo} atacou ${ataque}`;
    }
}
// Usando instância

let heroi = new heroiAventura ("Shihiro", 25, "Mago");

console.log(heroi.atacar());