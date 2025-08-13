module.exports = {
  "user.microsoftAuthenticated": {
    type: "exchange",
    name: "user.events", //  "channel"
    subscribers: ["Audit-Service"],
  },
  "lookuptype.created": {
    type: "exchange",
    name: "lookuptype.events",
    subscribers: ["Audit-Service"],
  },
  "lookuptype.updated": {
    type: "exchange",
    name: "lookuptype.events",
    subscribers: ["Audit-Service"],
  },
  "lookuptype.deleted": {
    type: "exchange",
    name: "lookuptype.events",
    subscribers: ["Audit-Service"],
  },
  "application.approved": {
    type: "exchange",
    name: "application.events",
    subscribers: ["Subscription-Service"],
  },
  "application.rejected": {
    type: "exchange",
    name: "application.events",
    subscribers: ["Subscription-Service"],
  },
  "application.approvalRequest": {
    type: "exchange",
    name: "application.events",
    subscribers: ["Subscription-Service"],
  },
  "personalDetails.created": {
    type: "exchange",
    name: "personalDetails.events",
    subscribers: ["Audit-Service"],
  },
  "personalDetails.updated": {
    type: "exchange",
    name: "personalDetails.events",
    subscribers: ["Audit-Service"],
  },
  "professionalDetails.created": {
    type: "exchange",
    name: "professionalDetails.events",
    subscribers: ["Audit-Service"],
  },
  "professionalDetails.updated": {
    type: "exchange",
    name: "professionalDetails.events",
    subscribers: ["Audit-Service"],
  },
  "subscriptionDetails.created": {
    type: "exchange",
    name: "subscriptionDetails.events",
    subscribers: ["Audit-Service"],
  },
  "subscriptionDetails.updated": {
    type: "exchange",
    name: "subscriptionDetails.events",
    subscribers: ["Audit-Service"],
  },
  "userInformation.submitted": {
    type: "exchange",
    name: "userInformation.events",
    subscribers: ["Audit-Service"],
  },
  "userInformation.updated": {
    type: "exchange",
    name: "userInformation.events",
    subscribers: ["Audit-Service"],
  },
};
