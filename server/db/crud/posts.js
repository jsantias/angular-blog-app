const bcrypt = require('bcrypt');

/* 
* Create new user account 
*
* params 
*   @userModel - the defined userModel
*   @data - Object containing email and password
*/
function createAccount(userModel, data) {
  return new Promise(async (resolve, reject) => {
    var hashedPassword = await bcrypt.hash(data.password, 10);
    userModel.create({
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      firstName: data.firstName,
      lastName: data.lastName,
      studentYear: data.studentYear
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error);
    })
  })
}

/* 
* Find user
*
* params
*   @userModel - the defined userModel
*   @email - user's email/username
*/
async function findUser(userModel, email) {
  // Find user with the given email
  const user = await userModel.findAll({
    where: {
      email: email
    }
  });

  if (user.length == 0) {
    throw new Error('No user with the email provided');
  }
  return user[0].dataValues;
}

module.exports =
  {
    createAccount,
    findUser
  }