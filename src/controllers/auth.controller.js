import User from "../models/user.model.js"

export const register = async (req, res) => {
   
    const {username, email, password} = req.body

    console.log(username, email, password);

    try {
        const newUser = new User({
            username,
            email,
            password
        })

        const userSaved = await newUser.save();
        res.json(userSaved)
    } catch (error) {
        console.log(error)
    }

   res.send('registrando')
};

export const login = (req, res) => res.send("login");