import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({errors: [e.message] });
    }
  }
  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.status(400).json({errors: [e.message] });
    }
  }
  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({errors: [e.message] });
    }
  }
  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({errors: ['Usuário não existe'] });
      }
      const novoUser = await user.update(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({errors: [e.message] });
    }
  }
  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({errors: ['Usuário não existe'] });
      }
      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({errors: [e.message] });
    }
  }
}

export default new UserController();
