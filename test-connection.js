const { connectRabbitMQ, publishEvent, subscribeToEvent } = require("./src/index");

async function testConnection() {
  try {
    console.log("🧪 Testing Message Bus Connection...");

    // Wait for connection to be established
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Test publishing an event
    console.log("📤 Testing event publishing...");
    await publishEvent("application.approved", {
      test: true,
      message: "This is a test event",
      timestamp: new Date().toISOString(),
    });

    console.log("✅ Message Bus test completed successfully!");
  } catch (error) {
    console.error("❌ Message Bus test failed:", error.message);
  }
}

// Run the test
testConnection();

