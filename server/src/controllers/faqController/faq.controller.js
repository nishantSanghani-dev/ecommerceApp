import { faqAddService, faqDeleteService, faqSingleViewService, faqStatusService, faqUpdateService, faqViewService } from "../../services/faqServices/faq.service.js"

export const faqAddController = async (req, res) => {
    try {
        const data = await faqAddService(req.body)
        if (!data.status) {
            return res.status(409).json(data)
        }
        return res.status(201).json({
            status: true,
            message: "Faq Created Successfully....!!",
            data:data.dataRes
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const faqViewController = async (req, res) => {
    try {
        const data = await faqViewService(req.query)

        return res.status(200).json({
            status: true,
            message: "Faq Viewd Successfully....!!",
            totalRecords: data.count,
            data: data.rows
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const faqDeleteController = async (req, res) => {
    try {
        const ids = req.body

        if (ids.length == 0) {
            return res.status(401).json({
                status: false,
                message: "Please Select Faq Items....!!"
            })
        }
        const data = await faqDeleteService(ids)

        return res.status(201).json({
            status: false,
            message: "Faq Deleted Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const faqSingleViewController = async (req, res) => {
    try {
        const { id } = req.params
        const data = await faqSingleViewService(id)
        return res.status(200).json({
            status: true,
            message: "Faq Single Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const faqUpdateController = async (req, res) => {
    try {
        const { id } = req.params
        const data = await faqUpdateService(req.body, id)
        return res.status(200).json({
            status: true,
            message: "Faq Updated Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const faqStatusController = async (req, res) => {
    try {
        const data = await faqStatusService(req.body)
        return res.status(200).json({
            status: true,
            message: "Faq Status Updated Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}