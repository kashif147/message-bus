const amqplib = require("amqplib");

let channel;
let connection;

async function connectRabbitMQ({
  amqpUrl = process.env.RABBITMQ_URL || "amqp://guest:guest@rabbitmq:5672",
  retryAttempts = 10,
  retryDelay = 3000,
} = {}) {
  for (let attempt = 1; attempt <= retryAttempts; attempt++) {
    try {
      console.log(`🔄 [message-bus] Attempting to connect to RabbitMQ (${attempt}/${retryAttempts})...`);
      connection = await amqplib.connect(amqpUrl);

      // Handle connection events
      connection.on("error", (err) => {
        console.error("❌ [message-bus] RabbitMQ connection error:", err.message);
      });

      connection.on("close", () => {
        console.warn("⚠️ [message-bus] RabbitMQ connection closed");
        channel = null;
      });

      channel = await connection.createChannel();

      // Handle channel events
      channel.on("error", (err) => {
        console.error("❌ [message-bus] RabbitMQ channel error:", err.message);
      });

      channel.on("close", () => {
        console.warn("⚠️ [message-bus] RabbitMQ channel closed");
        channel = null;
      });

      console.log("✅ [message-bus] Connected to RabbitMQ successfully");
      return;
    } catch (err) {
      console.error(`❌ [message-bus] RabbitMQ connection failed (Attempt ${attempt}):`, err.message);
      if (attempt === retryAttempts) {
        console.error("💥 All RabbitMQ connection attempts failed. Exiting...");
        process.exit(1);
      }
      console.log(`⏳ [message-bus] Retrying in ${retryDelay / 1000} seconds...`);
      await new Promise((res) => setTimeout(res, retryDelay));
    }
  }
}

function getChannel() {
  if (!channel) {
    throw new Error("❌ RabbitMQ channel not initialized. Please ensure RabbitMQ is running and connection is established.");
  }
  return channel;
}

function getConnection() {
  if (!connection) {
    throw new Error("❌ RabbitMQ connection not initialized. Please ensure RabbitMQ is running and connection is established.");
  }
  return connection;
}

module.exports = { connectRabbitMQ, getChannel, getConnection };
