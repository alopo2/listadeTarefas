const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

const concluirTarefa = (id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
}

export default BotaoConclui