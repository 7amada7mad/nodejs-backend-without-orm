import * as orderModel from '../models/orderModel.js';

export async function getOrders(req, res) {
  const orders = await orderModel.getAllOrders();
  res.json(orders);
}

export async function createOrder(req, res) {
  const newOrder = await orderModel.createOrder(req.body);
  res.status(201).json(newOrder);
}
