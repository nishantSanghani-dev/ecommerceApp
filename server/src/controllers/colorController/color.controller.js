import { colorAddSerive, colorViewService } from "../../services/colorServices/color.service.js"

export const colorAddContriller = async (req, res) => {
    try {
        const data = await colorAddSerive(req.body)

        if (!data.status) {
            return res.status(409).json(data)
        }

        return res.status(201).json({
            status: true,
            message: "Color Added Successfully....!!",
            data:data.dataRes
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const colorViewController = async (req, res) => {
    try {
        const data = await colorViewService()
        return res.status(200).json({
            status: true,
            message: "Color Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}