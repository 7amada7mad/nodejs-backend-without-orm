import * as userModel from '../models/userModel.js';

export async function getUsers(req, res) {
    const users = await userModel.getAllUsers();
    res.json(users);
}

export async function getUser(req, res) {
    const user = await userModel.getUserById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ error: 'User not found' });
}

export async function createUser(req, res) {
    const newUser = await userModel.createUser(req.body);
    res.status(201).json(newUser);
}


export async function deleteUser(req, res) {
    await userModel.deleteUser(req.params.id);
    res.status(204).end();
}
