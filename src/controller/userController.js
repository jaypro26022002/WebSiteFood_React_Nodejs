import userApiService from '../service/userApiService';

const readFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            // them + de chuyen du lieu qua kieu? int(so')
            let data = await userApiService.getUserwithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC, // error code
                DT: data.DT, //data
            })
        }

    } catch (e) {
        console.log(e);
        return res(500).json({
            EM: 'error from server userController',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const createFunc = async (req, res) => {
    try {
        //validate
        let data = await userApiService.createNewUser(req.body);
        // console.log('control data', data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: data.DT, //data
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server userController create',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const updateFunc = async (req, res) => {
    try {
        //validate
        let data = await userApiService.updataUser(req.body);
        // console.log('control data', data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: data.DT, //data
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server userController update',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const deleteFunc = async (req, res) => {
    try {
        let data = await userApiService.deleteUser(req.body.id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: data.DT, //data
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server userController deleted',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc
}