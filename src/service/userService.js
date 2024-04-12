// thu viện mã hóa pass
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashUserPassword(password);
    const Connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'sellfood', Promise: Bluebird });
    const [rows, fields] = await Connection.execute('INSERT INTO users (email, password, username)VALUES ( ?, ?, ?)',
        [email, hashPass, username]);

}

const getUserList = async () => {
    const Connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'sellfood', Promise: Bluebird });
    try {
        const [rows, fields] = await Connection.execute('Select * from users ');
        return rows;
    } catch (error) {
        console.log(">>>Check error ", error)
    }
}

const deleteUser = async (id) => {
    const Connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'sellfood', Promise: Bluebird });
    const [rows, fields] = await Connection.execute('DELETE FROM users WHERE id= ? ', [id]);

}

module.exports = {
    createNewUser, getUserList, deleteUser
}