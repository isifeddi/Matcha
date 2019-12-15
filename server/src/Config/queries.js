const queries = {
    SELECT : {
        GetUsers: 'SELECT * FROM users',
        GetUserByEmail: 'SELECT * FROM users WHERE email = ?',
        GetUserById: 'SELECT * FROM users WHERE id = ?',
        GetUserByUsername: 'SELECT * FROM users WHERE username = ?',
        GetUserByToken: 'SELECT * FROM users WHERE verif_token = ?',
        GetImages : 'SELECT * FROM images WHERE user_id = ?',
        GetInterests: 'SELECT interest FROM interests',
        GetStep: 'SELECT complete FROM users WHERE email = ?',
        CheckInter: 'SELECT COUNT(interest) as n FROM interests WHERE interest IN (?)',
    },
    INSERT : {
        AddImage: 'INSERT INTO images (user_id, path,isProfilePic) VALUES (?, ?,?)',
        AddUser: 'INSERT INTO users (lastname, firstname, username, email, password) VALUES (?, ?, ?, ?, ?)',
        CreateInterest: 'INSERT INTO interests (interest) VALUE (?)',
    },
    UPDATE : {
        Update: 'UPDATE users SET name = ?, email = ?, sex = ? WHERE id = ?',
        UpdateToken: 'UPDATE users SET verif_token = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE verif_token = ?',
        Confirmed: 'UPDATE users SET confirmed = 1 WHERE email = ?',
        notConfirmed: 'UPDATE users SET confirmed = 0 WHERE email = ?',
        UpdateInfo: 'UPDATE users SET gender = ?, sexOrient = ?, birthday = ?, bio = ?, complete = 1',
        setProfilePic:'UPDATE images SET IsProfilePic = 1 WHERE id = ? && user_id = ?',
        resetProfilePic : 'UPDATE images SET isProfilePic = 0 WHERE user_id = ?',
        setFirstProPic : 'UPDATE  images SET isProfilePic = 1 WHERE user_id = ? ORDER BY id ASC LIMIT 1;'
    },
    DELETE : {
        delImages : 'DELETE FROM `images` WHERE id = ? && user_id = ?'
    }
}

module.exports = queries;