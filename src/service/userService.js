import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password);

    Connection.query(
        'INSERT INTO users (email, password, username)VALUES ( ?, ?, ?)', [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        }
    );
}

const getUserList = async () => {
    const Connection = await mysql.createConnection({host:'localhost', user:'root', database: 'sellfood', Promise: Bluebird});
    let users = [];
    // Connection.query(
    //     'Select * from users ',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         console.log("check result: ", results)
    //     }
    // );
    try{
        const [rows, fields] = await Connection.execute('Select * from users ');
        return rows;
    } catch (error){
        console.log(">>>Check error ", error)
    }
}

module.exports = {
    createNewUser, getUserList
}