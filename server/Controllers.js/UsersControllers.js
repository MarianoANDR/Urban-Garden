import User from "../Models/UsersModel.js";

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users); 
}

export const createUsers = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
}

export const getUser = async (req, res) => {
    const user = await User.findOne({_id: req.params.id});
    res.json(user);
}

export const modifyUser = async (req, res) => {
    const user = await User.findOne({_id: req.params.id});
    const {username, email, password} = req.body;
        user.username = username
        user.email = email
        user.password = password
    user.save();
    res.json(user);    
}

export const deleteUser = async (req, res) => {
    const user = await User.findByIdAndRemove({_id: req.params.id});
    res.json(user, 'User deleted');
}