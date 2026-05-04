import { userModel } from "../../models/user.model.js"
import { hashedPassword, orignalPassword } from "../../utils/hasPassword.js"
import jwt from "jsonwebtoken"
export const userRegisterService = async (data) => {
    try {
        const { name, password, email } = data

        const hashPassword = await hashedPassword(password)

        data.password = hashPassword

        // console.log(data);
        const res = await userModel.create(data)

        return res

    } catch (error) {
        throw error
    }
}

export const userLoginService = async (data) => {
    try {
        const { email, password } = data
        const checkUser = await userModel.findOne({
            where: {
                email
            }
        })
        if (!checkUser) {
            return {
                status: false,
                statusCode: 401,
                message: "User Doesn't Exists....!!"
            }
        }

        const isSame = await orignalPassword(password, checkUser.password)

        if (!isSame) {
            return {
                status: false,
                statusCode: 401,
                message: "Password Doesn't Matched....!!"
            }
        }

        const user = {
            id: checkUser.id,
            email
        }

        const token = jwt.sign(user, process.env.TOKENKEY)

        return {
            status: true,
            name:checkUser.name,
            token
        }

    } catch (error) {
        throw error
    }
}