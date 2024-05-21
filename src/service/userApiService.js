import { where } from "sequelize/dist/index.js";
import db from "../models"

const getAllUser = async () => {
    try {
        let users = await db.User.findAll({
            attributes: ["id", "username", "email", "phone", "sex"],
            // include db.Group trong bản Group có điều kiện là id: 1 
            include: { model: db.Group, attributes: ["name", "description"] },
            raw: true,
            nest: true,
        });
        if (users) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: users
            }
        } else {
            return {
                EM: 'get data []',
                EC: 0,
                DT: []
            }
        }

    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrong with server',
            EC: 1,
            DT: []
        }
    }
}

const getUserwithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        // findAndCountAll: hàm truy xuất dữ liệu có trong 1 trang(VD: cho 5 phần tử xuất hiện trong trang 1)
        //count :
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "username", "email", "phone", "sex"],
            include: { model: db.Group, attributes: ["name", "description"] },
        })

        //công thức tổng số trang 
        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            users: rows
        }

        return {
            EM: 'fetch ok',
            EC: 0,
            DT: data
        }

    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrong with server',
            EC: 1,
            DT: []
        }
    }
}

const createNewUser = async (data) => {
    try {
        await db.User.create(data);
        return {
            EM: 'Create ok',
            EC: 0,
            DT: []
        }
    } catch (e) {
        console.log(e);
    }
}

const updateUser = async (data) => {
    try {
        let user = await db.User.findOne({
            where: { id: id }
        })
        if (user) {
            //update
            user.save({

            })
        } else {
            //not found
        }
    } catch (e) {
        console.log(e);
    }
}

const deleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id }
        })
        if (user) {
            await user.destroy();
            return {
                EM: 'Delete successful',
                EC: 0,
                DT: []
            }
        }
    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrong with server',
            EC: 1,
            DT: []
        }
    }
}

module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser, getUserwithPagination
}