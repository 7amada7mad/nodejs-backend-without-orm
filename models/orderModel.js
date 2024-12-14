import { initDb } from '../db/db.js';

let db;
(async () => {
  db = await initDb();
})();

export async function getAllOrders() {
  const [orders] = await db.execute(`
    SELECT orders.*, users.name as userName 
    FROM orders 
    JOIN users ON orders.userId = users.id
  `);
  return orders;
}

export async function createOrder(data) {
  const { total, userId } = data;
  const [result] = await db.execute(
    'INSERT INTO orders (total, userId) VALUES (?, ?)',
    [total, userId]
  );
  return { id: result.insertId, total, userId };
}
