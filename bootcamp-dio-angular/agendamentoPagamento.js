const prompt = require('prompt-sync')();

var nome = prompt("Nome do beneficiário: ");
var valorAserPago = parseFloat(prompt("Valor: "));
var dataVencimento = prompt("Data de vencimento: ");

function mostrarMensagemAgendamento(nome, valorAserPago, dataVencimento) {
    var dataNormalizada = dataVencimento.replace(/-/g, '/');
    var mensagem = `Pagamento Agendado! Valor: R$ ${valorAserPago}, vencimento ${dataNormalizada}.`
    console.log(mensagem);
}

mostrarMensagemAgendamento(nome, valorAserPago, dataVencimento);