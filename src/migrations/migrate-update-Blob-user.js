module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Food', 'thumbnail', {
                type: Sequelize.BLOB,
                allowNull: true,
            })
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Food', 'thumbnail', {
                type: Sequelize.STRING,
                allowNull: true,
            })
        ])
    }
};