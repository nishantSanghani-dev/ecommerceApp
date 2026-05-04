import { materialAddService, materialViewService } from "../../services/materialServices/material.service.js"

export const materialAddController = async (req, res) => {
    try {
        const data = await materialAddService(req.body)
        // console.log(data);
        
        if (!data.status) {
            return res.status(409).json(data);
        }

        return res.status(201).json({
            status: true,
            message: "Material Added Successfully....!!",
            data:data.dataRes
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const materialViewController = async (req, res) => {
    try {
        const data = await materialViewService()
        return res.status(200).json({
            status: true,
            message: "Material Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}