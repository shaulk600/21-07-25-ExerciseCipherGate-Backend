
import mysql from 'mysql2/promise';

try {
    // Create the connection to database
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'test',

    });
} catch (err) {
    console.log(err);
}
export default pool



