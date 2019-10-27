const queries = {
    User : {
        GetUsers: 'SELECT * FROM users',
        GetUserByEmail: 'SELECT * FROM users WHERE email = ?',
        GetUserById: 'SELECT * FROM users WHERE id = ?',
        AddUser: 'INSERT INTO users (firstname, lastname, username, email, password) VALUES (?, ?, ?, ?, ?)',
        Update: 'UPDATE users SET name = ?, email = ?, sex = ? WHERE id = ?'
    }
 };
 module.exports = queries;