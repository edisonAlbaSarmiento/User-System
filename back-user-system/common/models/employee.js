'use strict';

module.exports = function(Employee) {

  Employee.registerUser = async data => {
    const findUser = await Employee.app.models.Employee.findOne({
      where: {
        email: data.email
      }
    })
    if (!findUser) {
      const date = new Date()
      const strngDate = date.toString('yyyy/MM/dd HH:mm:ss')
      const object = {
        fullName: data.fullName,
        email: data.email,
        cellphone: data.cellphone,
        createdDate: strngDate,
        updateDate: strngDate,
      }

      try {
        const result = await Employee.create([object])
        console.log('result',result)
        return 'Usuario registrado Exitosamente'
      } catch (error) {
        return 'No se registro el usuario'
      }
    } else {
      const err = new Error('El usuario ya está registrado')
      err.message = 'El usuario ya está registrado'
      err.statusCode = 400
      throw err
    }
  }

  Employee.remoteMethod('registerUser', {
    description: 'Register user',
    accepts: [
      {
        arg: 'data',
        type: 'object',
        http: { source: 'body' },
        description: 'New user data'
      },
      {
        arg: 'req',
        type: 'object',
        http: { source: 'req' }
      }
    ],
    http: {
      verb: 'post',
      path: '/register-user'
    },
    returns: {
      root: true,
      type: 'object'
    }
  })

};
