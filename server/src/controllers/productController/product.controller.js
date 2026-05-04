import { productAddService, productCategoryViewService, productSingleViewService, productViewService } from "../../services/productServices/product.service.js";

export const productAddController = async (req, res) => {
    try {
        const obj = req.body
        const { image, backImage, galleryImages } = req.files
        if (req.files) {
            if (req.files.image) {
                obj['image'] = req.files.image[0].filename
            }
        }
        if (req.files.backImage) {
            obj['backImage'] = req.files.backImage[0].filename;
        }
        if (req.files.galleryImages) {
            obj['galleryImages'] = req.files.galleryImages.map((value) => value.filename)
        }
        // console.log(obj);

        const data = await productAddService(obj)

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: data.status,
                message: data.message
            })
        }

        return res.status(201).json({
            status: true,
            message: "Product Created Successfully....!!",
            data: data.dataRes
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const productViewController = async (req, res) => {
    try {
        const { limit, skip } = req.query
        const data = await productViewService(limit, skip)
        return res.status(200).json({
            status: true,
            staticPath: process.env.PRODUCT_STATICPATH,
            totalRecords: data.totalRecords.length,
            message: "Product Viewd Successfully....!!",
            data: data.data
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const productSingleViewController = async (req, res) => {
    try {
        const { id } = req.params
        const data = await productSingleViewService(id)
        return res.status(200).json({
            status: true,
            staticPath: process.env.PRODUCT_STATICPATH,
            message: "Product Single Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const productCategoryController = async (req, res) => {
    try {
        const { catName } = req.params
        // console.log(catName);

        const data = await productCategoryViewService(catName)
        return res.status(200).json({
            status: true,
            staticPath: process.env.PRODUCT_STATICPATH,
            message: "Product Single Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}