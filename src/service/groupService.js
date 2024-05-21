import db from "../models";

const getGroups = async () => {
    try {
        let data = await db.Group.findAll({
            //order: giúp data xuất hiện theo 'name' 'ASC(bản chữ cái ABC'
            order: [['name', 'ASC']]
        });
        return {
            EM: 'Get group success',
            EC: 0,
            DT: data
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'error from service',// error messeger
            EC: 1, // error code
            DT: [] //data
        }
    }
}

module.exports = {
    getGroups
}