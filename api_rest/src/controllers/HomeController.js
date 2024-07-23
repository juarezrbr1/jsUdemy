import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Juarez',
      sobrenome: 'Ribeiro',
      email: 'juarez@email.com',
      idade: 30,
      peso: 70,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
