import BotaoConclui from "./components/concluiTarefa";
import BotaoDeleta from "./components/deletaTarefa";

const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);

    const dataFormatada = data.format('DD/MM/YYYY');

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa)