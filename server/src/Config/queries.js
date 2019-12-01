const queries = {
    User : {
        GetUsers: 'SELECT * FROM users',
        GetUserByEmail: 'SELECT * FROM users WHERE email = ?',
        GetUserById: 'SELECT * FROM users WHERE id = ?',
        GetUserByUsername: 'SELECT * FROM users WHERE username = ?',
        GetUserByToken: 'SELECT * FROM users WHERE verif_token = ?',
        AddUser: 'INSERT INTO users (lastname, firstname, username, email, password) VALUES (?, ?, ?, ?, ?)',
        Update: 'UPDATE users SET name = ?, email = ?, sex = ? WHERE id = ?',
        UpdateToken: 'UPDATE users SET verif_token = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE verif_token = ?', 
        Confirmed: 'UPDATE users SET confirmed = 1 WHERE email = ?',
        notConfirmed: 'UPDATE users SET confirmed = 0 WHERE email = ?'
    }
 };
 module.exports = queries;