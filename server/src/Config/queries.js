const queries = {
    SELECT : {
        GetUsers: "SELECT id,firstname,lastname, gender, sexOrient, bio, birthday, rating, isOnline, lastSignIn FROM users WHERE id != ? AND id NOT IN  (SELECT blocked_id FROM blockList  WHERE blocker_id = ?) AND confirmed = 1 AND complete = 3",
        // GetAllImages : "SELECT * FROM images WHERE user_id != ? AND user_id NOT IN  (SELECT blocked_id FROM blockList  WHERE blocker_id = ?)",
        // GetAllInterests: "SELECT interest FROM interests INNER JOIN usersInterests ON interests.interest_id = usersInterests.iId WHERE usersInterests.uId = ?",
        GetUserByEmail: "SELECT *,DATE_FORMAT(birthday,'%Y-%m-%d') as transDate FROM users WHERE email = ?",
        GetUserById: "SELECT *,DATE_FORMAT(birthday,'%Y-%m-%d') as transDate FROM users WHERE id = ?",
        GetUserByUsername: "SELECT *,DATE_FORMAT(birthday,'%Y-%m-%d') as transDate FROM users WHERE username = ?",
        GetUserByToken: "SELECT * FROM users WHERE verif_token = ?",
        GetImages : "SELECT * FROM images WHERE user_id = ?",
        GetInterests: "SELECT interest FROM interests",
        GetStep: "SELECT complete FROM users WHERE id = ?",
        CheckInter: "SELECT COUNT(interest) as n FROM interests WHERE interest IN (?)",
        GetInterId : "SELECT interest_id FROM interests WHERE interest = ?",
        InterCreatedNbr: "SELECT COUNT(interest) as n FROM interests WHERE createdBy = ? ",
        GetUserInter: "SELECT interest FROM interests INNER JOIN usersInterests ON interests.interest_id = usersInterests.iId WHERE usersInterests.uId = ?"
    },
    INSERT : {
        AddImage: 'INSERT INTO images (user_id, path,isProfilePic) VALUES (?, ?,?)',
        AddUser: 'INSERT INTO users (lastname, firstname, username, email, password) VALUES (?, ?, ?, ?, ?)',
        CreateInterest: "INSERT INTO interests (interest, createdBy) VALUES (?, ?)",
        InsertUserInter: "INSERT INTO usersInterests (uId, iId) VALUES (?, ?)",
    },
    UPDATE : {
        Update: 'UPDATE users SET name = ?, email = ?, sex = ? WHERE id = ?',
        UpdateToken: 'UPDATE users SET verif_token = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE verif_token = ?',
        Confirmed: 'UPDATE users SET confirmed = 1 WHERE email = ?',
        notConfirmed: 'UPDATE users SET confirmed = 0 WHERE email = ?',
        UpdateInfo: "UPDATE users SET gender = ?, sexOrient = ?, birthday = ?, bio = ? WHERE id = ?",
        UpdateOnline: "UPDATE users SET isOnline = 1 ,lastSignIn = null WHERE id = ?",
        UpdateOffline: "UPDATE users SET isOnline = 0 ,lastSignIn = NOW() WHERE id = ?",
        UpdateStep:"UPDATE users SET complete = ? WHERE id = ?",
        UpdateLocation: "UPDATE users SET latitude = ? , longitude = ? WHERE id = ?",
        setProfilePic:'UPDATE images SET IsProfilePic = 1 WHERE id = ? && user_id = ?',
        resetProfilePic : 'UPDATE images SET isProfilePic = 0 WHERE user_id = ?',
        setFirstProPic : 'UPDATE  images SET isProfilePic = 1 WHERE user_id = ? ORDER BY id ASC LIMIT 1;'
    },
    DELETE : {
        delImages : 'DELETE FROM `images` WHERE id = ? && user_id = ?',
        DeleteUserInter: "DELETE FROM `usersInterests` WHERE uId = ?",
    },
}

module.exports = queries;