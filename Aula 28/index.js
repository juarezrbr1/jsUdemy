// const data = new Date()
// console.log(data)
const data = new Date('2024-03-19 12:30:01');
console.log(data)
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()+1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0-Domingo
console.log(data.toString());
console.log(Date.now());
