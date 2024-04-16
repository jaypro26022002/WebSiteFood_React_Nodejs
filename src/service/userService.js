// thu viện bcypt mã hóa pass
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';
import db from '../models/index';
import { where } from 'sequelize/lib/sequelize';

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashUserPassword(password);
    try {
        //ORM
        await db.User.create({
            username: username,
            email: email,
            password: hashPass
        });
    } catch (error) {
        console.log(">> error <<", error);
    }
}

const getUserList = async () => {
    const Connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'sellfood', Promise: Bluebird });
    try {
        const [rows, fields] = await Connection.execute('Select * from user ');
        return rows;
    } catch (error) {
        console.log(">>>Check error ", error)
    }
}

const deleteUser = async (userId) => {
    // ORM
    await db.User.destroy({
        where: { id: userId }
    })

}

const getUserById = async (id) => {
    //Kiểu ORM
    let user = {};
    user = await db.User.findOne({
        //id 1:id từ table; id 2 id được tạo ra cho hàm getUserById
        where: { id: id }
    })
    //hàm get này sẽ biến đổi dữ liệu trả ra object kiểu javascript ko Sequelize
    return user.get({ plain: true })
    // kiểu NodeJS
    // const Connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'sellfood', Promise: Bluebird });
    // try {
    //     const [rows, fields] = await Connection.execute('SELECT * FROM user WHERE id= ? ', [id]);
    //     // console.log(">> check rows: ", rows)
    //     return rows;
    // } catch (error) {
    //     console.log(">> check error: ", error);
    // }
}

const updateUserInfor = async (email, username, id) => {
    // kiểu ORM
    await db.User.update(
        { emai: email, username: username },
        {
            where: { id: id }
        },
    )
    // kiểu Nodejs
    // const Connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'sellfood', Promise: Bluebird });
    // try {
    //     const [rows, fields] = await Connection.execute('UPDATE user SET email = ?, username = ? WHERE id = ? ', [email, username, id]);
    //     // console.log(">> check rows: ", rows)
    //     return rows;
    // } catch (error) {
    //     console.log(">> check error: ", error);
    // }
}

module.exports = {
    createNewUser, getUserList, deleteUser, getUserById, updateUserInfor
}