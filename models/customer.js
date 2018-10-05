var actions = {
  getByEmail: (db, email, callback) => {
    const query = {
      text: 'SELECT * FROM customers WHERE email = $1',
      values: [email]
    }
    db.query(query).then(data => {
      callback(data)
    }).catch(e => console.log(e))
  },
  create: (db, customerData, callback) => {
    const insertCustomer = {
      text: 'INSERT INTO customers ( email,password,user_type) VALUES ($1, $2, \'admin\') RETURNING id ',
      values: [  customerData.email,  customerData.password ]
    }
    console.log('preparing customer data')

    db.query(insertCustomer).then(data => {
      console.log('customer data added')
      var customerId = data.rows[0].id
      console.log('customer id:' + customerId)
      callback(customerId)
    }).catch(e => console.log(e))
  },
  list: (db, callback) => {
    db.query('SELECT * FROM customers ORDER BY id').then(data => {
      callback(data)
    })
  }
}

module.exports = actions