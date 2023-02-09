import Jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import User from '../Models/UsersModel.js';

const protect = asyncHandler(async(req, res, next) => { //middleware needs next
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get token from header
            token = req.headers.authorization.split(' ')[1]
            
            //Verify token 
            const decoded = Jwt.verify(token, process.env.JWT_SECRET)
            
            //Get user from the token 
            req.user = await User.findById(decoded.id).select('-password') 
            next(); //To call the next piece of Middleware 
        } catch (error) {
             console.log(error);
             res.status(401) 
             throw new Error('Not authorized')
        }
    }  
    if(!token) {
        res.status(401)
        throw new Error('Not autorized, no token') 
    }
})

export default protect; 

