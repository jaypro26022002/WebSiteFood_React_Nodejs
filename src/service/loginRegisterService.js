import db from "../models"
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}
const checkEmailExist = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail }
    })
    if (user) {
        return true;
    }
    return false;
}

// ORM
const checkPhoneExist = async (userPhone) => {
    let user = await db.User.findOne({
        where: { phone: userPhone }
    })
    if (user) {
        return true;
    }
    return false;
}

const resgisterNewUser = async (rawUserData) => {
    try {
        //check email/phone are exist
        let isEmailExist = await checkEmailExist(rawUserData.email);
        if (isEmailExist === true) {
            return {
                EM: 'the email is already exist',
                EC: 1
            }
        }
        let isPhoneExist = await checkPhoneExist(rawUserData.phone);
        if (isPhoneExist === true) {
            return {
                EM: 'Phone is already exist',
                EC: 1
            }
        }
        // hashPassword
        let hashPassword = await hashUserPassword(rawUserData.password);

        // create new user
        await db.User.create({
            email: rawUserData.email,
            username: rawUserData.username,
            phone: rawUserData.phone,
            password: hashPassword,
        })

        return {
            EM: 'A user is created  successfully',
            EC: 0
        }

    } catch (e) {
        console.log(e)
        return {
            EM: 'Something wrong in service...',
            EC: -2
        }
    }
}

module.exports = {
    resgisterNewUser
}