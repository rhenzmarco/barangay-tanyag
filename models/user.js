
var actions = {
  getById: (db, id, callback) => {
    const query = {
      text: 'SELECT * FROM customers WHERE id = $1',
      values: [id]
    }
    db.query(query)
      .then(res => callback(res.rows[0]))
      .catch(e => callback(e))
  },
  getByEmail: (db, username, callback) => {
    const query = {
      text: 'SELECT id,email,password FROM customers WHERE email = $1',
      values: [username]
    }
    db.query(query)
      .then(res => callback(res.rows[0]))
      .catch(e => callback(e))
  },
  getCustomerData: (db, id, callback) => {
    const query = {
      text: `SELECT user_type FROM customers WHERE id = '${id.id}'`
    }
    db.query(query).then(result => {
      callback(result.rows)
    }).catch(e => {
      console.log(e)
    })
  }

}

// module.exports = action;