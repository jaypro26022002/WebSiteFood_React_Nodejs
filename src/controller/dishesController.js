import dishesApiService from '../service/dishesApiService'

const readFuncFood = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            // them + de chuyen du lieu qua kieu? int(so')
            let data = await dishesApiService.getFoodwithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC, // error code
                DT: data.DT, //datas
            })
        }

    } catch (e) {
        console.log(e);
        return res(500).json({
            EM: 'error from server disController',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const createFuncFood = async (req, res) => {
    try {
        //validate
        let data = await dishesApiService.createNewFood(req.body);
        console.log('control data', data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: data.DT, //data
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const updateFuncFood = async (req, res) => {
    try {
        //validate
        let data = await dishesApiService.updateFood(req.body);
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

// const deleteFunc = async (req, res) => {
//     try {
//         let data = await userApiService.deleteUser(req.body.id);
//         return res.status(200).json({
//             EM: data.EM,
//             EC: data.EC, // error code
//             DT: data.DT, //data
//         })
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json({
//             EM: 'error from server',// error messeger
//             EC: '-1', // error code
//             DT: '' //data
//         })
//     }
// }

const readFuncProduct = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            // them + de chuyen du lieu qua kieu? int(so')
            let data = await dishesApiService.getProductwithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC, // error code
                DT: data.DT, //datas
            })
        }

    } catch (e) {
        console.log(e);
        return res(500).json({
            EM: 'error from server disController',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const createFuncProduct = async (req, res) => {
    try {
        //validate
        let data = await dishesApiService.createNewProduct(req.body);
        console.log('control data', data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: data.DT, //data
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const updateFuncProduct = async (req, res) => {
    try {
        //validate
        let data = await dishesApiService.updateFuncProduct(req.body);
        // console.log('control data', data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: data.DT, //data
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server disController update',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

// const deleteFunc = async (req, res) => {
//     try {
//         let data = await userApiService.deleteUser(req.body.id);
//         return res.status(200).json({
//             EM: data.EM,
//             EC: data.EC, // error code
//             DT: data.DT, //data
//         })
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json({
//             EM: 'error from server',// error messeger
//             EC: '-1', // error code
//             DT: '' //data
//         })
//     }
// }

const readFuncType = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            // them + de chuyen du lieu qua kieu? int(so')
            let data = await dishesApiService.getTypewithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC, // error code
                DT: data.DT, //datas
            })
        }

    } catch (e) {
        console.log(e);
        return res(500).json({
            EM: 'error from server disController',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const createFuncType = async (req, res) => {
    try {
        //validate
        let data = await dishesApiService.createNewType(req.body);
        console.log('control data', data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: data.DT, //data
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

const updateFuncType = async (req, res) => {
    try {
        //validate
        let data = await dishesApiService.updateFuncType(req.body);
        // console.log('control data', data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: data.DT, //data
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server disController update',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}

// const deleteFuncType = async (req, res) => {
//     try {
//         let data = await userApiService.deleteUser(req.body.id);
//         return res.status(200).json({
//             EM: data.EM,
//             EC: data.EC, // error code
//             DT: data.DT, //data
//         })
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json({
//             EM: 'error from server',// error messeger
//             EC: '-1', // error code
//             DT: '' //data
//         })
//     }
// }

module.exports = {
    readFuncFood, createFuncFood, updateFuncFood,
    readFuncProduct, createFuncProduct, updateFuncProduct,
    readFuncType, createFuncType, updateFuncType,

}