# Message Bus - RabbitMQ Event System

This is a reusable RabbitMQ message bus for microservices communication.

## Features

- ✅ Automatic RabbitMQ connection with retry logic
- ✅ Event publishing to exchanges and queues
- ✅ Event subscription with durable queues
- ✅ Automatic acknowledgment handling
- ✅ Error handling and message requeuing
- ✅ Service-specific queue naming

## Configuration

### Environment Variables

```bash
RABBITMQ_URL=amqp://guest:guest@rabbitmq:5672
```

### Event Configuration

Events are configured in `event.config.js`:

```javascript
"application.approved": {
  type: "exchange",        // "exchange" or "queue"
  name: "application.events", // exchange/queue name
  subscribers: ["Subscription-Service"]
}
```

## Usage

### Publishing Events

```javascript
const { publishEvent } = require("message-bus");

await publishEvent("application.approved", {
  personalDetailsId: "123",
  userId: "456",
  subscriptionDetails: {...},
  approvalDetails: {...}
});
```

### Subscribing to Events

```javascript
const { subscribeToEvent } = require("message-bus");

await subscribeToEvent(
  "application.approved",
  async (data) => {
    // Handle the event data
    console.log("Application approved:", data);
  },
  "Subscription-Service"
);
```

## Testing

### Test Connection

```bash
node test-connection.js
```

### Test with Docker

1. Start the services:

```bash
./run-docker.sh
```

2. Check RabbitMQ management console:

   - URL: http://localhost:15672
   - Username: guest
   - Password: guest

3. Monitor logs for connection status:

```bash
docker logs message-bus
```

## Architecture

```
Portal Service → RabbitMQ Exchange → Subscription Service
     ↓              ↓                    ↓
  Publishes    Routes Events         Consumes Events
  Events       to Queues            and Creates
                                    Subscriptions
```

## Troubleshooting

### Connection Issues

1. Ensure RabbitMQ container is running:

```bash
docker ps | grep rabbitmq
```

2. Check RabbitMQ logs:

```bash
docker logs rabbitmq
```

3. Verify network connectivity:

```bash
docker network ls
docker network inspect mainnetwork
```

### Event Not Received

1. Check if event is published:

```bash
docker logs portal-service | grep "Published"
```

2. Check if event is received:

```bash
docker logs subscription-service | grep "Processing"
```

3. Verify exchange and queue exist in RabbitMQ management console

## Supported Events

- `application.approved` - Application approval events
- `application.rejected` - Application rejection events
- `user.microsoftAuthenticated` - User authentication events
- `lookuptype.*` - Lookup type CRUD events
- `personalDetails.*` - Personal details CRUD events
- `professionalDetails.*` - Professional details CRUD events
- `subscriptionDetails.*` - Subscription details CRUD events
- `userInformation.*` - User information events
