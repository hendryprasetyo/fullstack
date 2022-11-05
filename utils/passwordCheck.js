const bcrypt = require('bcrypt');
const UsersModel = require('../models/users');

const passwordCheck = async (nas, password) => {
  const userData = await UsersModel.findOne({ where: { nas: nas } });
  const compare = await bcrypt.compare(password, userData.password);
  return { compare, userData };
};

module.exports = passwordCheck;
