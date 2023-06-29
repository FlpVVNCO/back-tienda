import jwt from "jsonwebtoken"
import {TOKEN_SECRET} from '../config.js'

export const authRequired = (req, res, next) => {
    const {token} = req.cookies

    if(!token) return res.status(401).send({message: "No token, authorization denied"})
    
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({message:"Ïnvalid Token" })
        
        console.log(user.id)

        req.user = user;

        next()

    })  

    
}