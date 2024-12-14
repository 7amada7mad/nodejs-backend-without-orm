import { initDb } from '../db/db.js';

let db;
(async () => {
    db = await initDb();
})();

export async function getAllUsers() {
    const [users] = await db.execute('SELECT * FROM users');
    return users;
}

export async function getUserById(id) {
    const [users] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return users[0];
}

export async function createUser(data) {
    const { name, email } = data;
    const [result] = await db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, name, email };
}

export async function deleteUser(id) {
    await db.execute('DELETE FROM users WHERE id = ?', [id]);
}
