import db from "../models";

const getFoodwithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        // findAndCountAll: hàm truy xuất dữ liệu có trong 1 trang(VD: cho 5 phần tử xuất hiện trong trang 1)
        //count :
        const { count, rows } = await db.Food.findAndCountAll({
            offset: offset,
            limit: limit,
            // sort: '' hàm sort kiếm theo ý muốn(id,name,..) tìm hiểu thêm 
            attributes: ["id", "nameFood", "pricedown", "price", "quantity"],
        })

        //công thức tổng số trang 
        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            food: rows
        }

        return {
            EM: 'fetch Food ok',
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

// const createNewFood = async (data) => {
//     try {
//         await db.Food.create(data);
//         return {
//             EM: 'Create food ok',
//             EC: 0,
//             DT: []
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

const createNewFood = async (data) => {
    try {
        await db.Food.create({
            nameFood: data.nameFood,
            thumbnail: data.avatar, // Save avatar to thumbnail field
            pricedown: data.pricedown,
            price: data.price,
            quantity: data.quantity,
        });
        // console.log(">> check data service food", data)
        return {
            EM: 'Create food ok',
            EC: 0,
            DT: []
        }
    } catch (e) {
        console.log(e);
    }
}

// const updateUser = async (data) => {
//     try {
//         let user = await db.User.findOne({
//             where: { id: id }
//         })
//         if (user) {
//             //update
//             user.save({

//             })
//         } else {
//             //not found
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

// const deleteUser = async (id) => {
//     try {
//         let user = await db.User.findOne({
//             where: { id: id }
//         })
//         if (user) {
//             await user.destroy();
//             return {
//                 EM: 'Delete successful',
//                 EC: 0,
//                 DT: []
//             }
//         }
//     } catch (e) {
//         console.log(e);
//         return {
//             EM: 'something wrong with server',
//             EC: 1,
//             DT: []
//         }
//     }
// }

module.exports = {
    getFoodwithPagination, createNewFood
}