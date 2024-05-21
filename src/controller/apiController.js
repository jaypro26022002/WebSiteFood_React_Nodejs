import loginRegisterService from '../service/loginRegisterService'

const testApi = (req, res) => {
    return res.status(200).json({
        message: 'ok',
        data: 'test api today'
    })
}

const handleRegister = async (req, res) => {
    try {
        // req.body 
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing required input', //error messeger
                EC: '1', // error code
                DT: '' //data
            })
        }
        if (req.body.password && req.body.password.length < 4) {
            return res.status(200).json({
                EM: 'Your password must have more ',// error messeger
                EC: '1', // error code
                DT: '' //data
            })
        }

        let data = await loginRegisterService.resgisterNewUser(req.body)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC, // error code
            DT: '' //data
        })
    } catch {
        return res.status(500).json({
            EM: 'error from server',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}


const handleLogin = async (req, res) => {
    try {
        let data = await loginRegisterService.handleUserLogin(req.body);

        return res.status(200).json({
            EM: data.EM,// error messeger
            EC: data.EC, // error code
            DT: data.DT //data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error from server',// error messeger
            EC: '-1', // error code
            DT: '' //data
        })
    }
}


module.exports = {
    testApi, handleRegister, handleLogin
}