
import pool from "../dbs/db.js";

export async function getUser(obj) {
    try {
        const [rows] = await pool.execute('SELECT * FROM users');
        return rows;
    } catch (err) {
        console.log(err);
        return null;
    }
}


async function createUser(name, email) {
    const [result] = await pool.execute(
        'INSERT INTO users (name, email) VALUES (?, ?)', [name, email]
    );
    console.log('User created with ID:', result.insertId);
}