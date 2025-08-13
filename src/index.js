const { connectRabbitMQ, getChannel } = require("./config/rabbitmq");
const { publishEvent } = require("./publisher");
const { subscribeToEvent } = require("./subscriber");
const { getAllEvents } = require("./events.info");

// Auto-connect to RabbitMQ when module is imported
connectRabbitMQ({
  amqpUrl: process.env.RABBITMQ_URL || "amqp://guest:guest@rabbitmq:5672",
  retryAttempts: 15,
  retryDelay: 5000,
}).catch(console.error);

module.exports = {
  connectRabbitMQ,
  publishEvent,
  subscribeToEvent,
  getChannel,
  getAllEvents,
};
