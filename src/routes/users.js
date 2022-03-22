import {Router} from "express"
const router = Router()


router.get("/", function(req, res){
    res.send("route user")
})

export default router


