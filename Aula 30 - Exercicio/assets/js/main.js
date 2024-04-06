function insereData() {
    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function dataHoraFormatada() {
        const diaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        const dataAtual = new Date();
        const diaSemana = dataAtual.getDate()
        const diaMes = dataAtual.getDay()
        const mes = dataAtual.getMonth()
        const ano = dataAtual.getFullYear()
        const hora = dataAtual.getHours()
        const minuto = dataAtual.getMinutes()

        const dataFormatada = `${diaDaSemana[diaSemana]}, ${diaMes} de ${meses[mes]} de ${ano} às ${hora}:${zeroAEsquerda(minuto)}`
        return dataFormatada;
        
    }
    function insereHTML() {
        const dataFormatada = dataHoraFormatada();
        const getElement = document.querySelector('#date-hora');
        getElement.innerHTML = dataFormatada;
    }
    insereHTML()
}


function solucaoAlternativa() {
    const data = new Date();
    const getElement = document.querySelector('#date-hora');
    getElement.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
}

solucaoAlternativa();
