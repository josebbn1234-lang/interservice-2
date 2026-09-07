// Ano automático no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Simulação da consulta de boleto (sem backend ainda — só demonstração visual)
const form = document.getElementById('boleto-form');
const result = document.getElementById('boleto-result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const condominio = document.getElementById('condominio').value;
  const unidade = document.getElementById('unidade').value.trim();
  const cpf = document.getElementById('cpf').value.trim();

  if (!condominio || !unidade || !cpf) {
    result.textContent = 'Preencha condomínio, unidade e CPF para consultar.';
    return;
  }

  result.textContent = 'Esta é uma demonstração — a consulta real de boletos será conectada em breve.';
});
