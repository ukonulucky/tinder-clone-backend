import dbSchema from "../db/dbSchema.js";
import express from "express"

const router = express.Router()

router.get("/",async(req,res) => {
    res.status(200).send("Home Page")
})

router.post("/tinder-clone/createCard", async (req,res) => {
    try {
    const data = req.body;
        const createCard = await dbSchema.create(data)
        res.status(201).send(createCard)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get("/tinder-clone/getCards", async (req, res) => {
    try {
        const result = await dbSchema.find();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send("internal server error")
    }
})
export default router