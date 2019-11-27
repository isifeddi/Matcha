const queries = {
    User : {
        GetUsers: 'SELECT * FROM users',
        GetUserByEmail: 'SELECT * FROM users WHERE email = ?',
        GetUserById: 'SELECT * FROM users WHERE id = ?',
        GetUserByUsername: 'SELECT * FROM users WHERE username = ?',
        AddUser: 'INSERT INTO users (lastname, firstname, username, email, password) VALUES (?, ?, ?, ?, ?)',
        Update: 'UPDATE users SET name = ?, email = ?, sex = ? WHERE id = ?',
        UpdateToken: 'UPDATE users SET verif_token = ? WHERE email = ?',
    }
 };
 module.exports = queries;