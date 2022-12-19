//Criando e atribuindo a classe 

class Atleta {
constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas
    }
//Definindo categoria    
    calculaCategoria() {
        if (this.idade >= 8 && this.idade < 12)
            return "Infantil"
        if (this.idade > 11 && this.idade < 14)
            return "Juvenil"
        if (this.idade > 13 && this.idade < 16)
            return "Intermediário"
        if (this.idade > 15 && this.idade <= 31)
            return "Adulto"
    }
//Definindo IMC
    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

//Calculando media valida do Atleta
    calculaMediaValida() {
        let notasTotais = this.notas;
        let notasOrganizadas = notasTotais.sort(function verificaNumeros(a, b) {
            if (a == b) return 0;
            if (a < b) return -1;
            if (a > b) return 1;
        });
        let notasEstimadas = notasOrganizadas.slice(1, 4)
        let somaNotasEstimadas = notasEstimadas.reduce(function (total, atual) {
            return total + atual
        }, 0)
        let media = (somaNotasEstimadas / notasEstimadas.length).toFixed(2);
        return media;
    }

obtemNomeAtleta(){
    return this.nome
} 

obtemIdadeAtleta() {
    return this.idade;
} 
obtemPesoAtleta() {
    return this.peso;
} 
obtemNotasAtleta() {
    return this.notas;
} 
obtemCategoria() {
    return atleta.calculaCategoria()
} 
obtemIMC() {
    return atleta.calcularIMC()
} 
obtemMediaValida() {
    return atleta.calculaMediaValida()
}
}

// Declarando o atleta
 const atleta = new Atleta("Cesar Abascal",30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);


console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());