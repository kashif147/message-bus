const { publishEvent } = require('../publisher');

// Event types for user information flow
const USER_INFORMATION_EVENTS = {
  PERSONAL_DETAILS_CREATED: 'personal.details.created',
  PERSONAL_DETAILS_UPDATED: 'personal.details.updated',
  PROFESSIONAL_DETAILS_CREATED: 'professional.details.created',
  PROFESSIONAL_DETAILS_UPDATED: 'professional.details.updated',
  SUBSCRIPTION_DETAILS_CREATED: 'subscription.details.created',
  SUBSCRIPTION_DETAILS_UPDATED: 'subscription.details.updated',
  USER_INFORMATION_SUBMITTED: 'user.information.submitted',
  USER_INFORMATION_UPDATED: 'user.information.updated',
  USER_INFORMATION_REQUESTED: 'user.information.requested'
};

// Publish personal details created event
const emitPersonalDetailsCreated = async (personalDetails) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.PERSONAL_DETAILS_CREATED, {
      eventType: USER_INFORMATION_EVENTS.PERSONAL_DETAILS_CREATED,
      timestamp: new Date().toISOString(),
      data: personalDetails,
      userId: personalDetails.userId
    });
    console.log('Personal details created event published');
  } catch (error) {
    console.error('Error publishing personal details created event:', error);
    throw error;
  }
};

// Publish personal details updated event
const emitPersonalDetailsUpdated = async (personalDetails) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.PERSONAL_DETAILS_UPDATED, {
      eventType: USER_INFORMATION_EVENTS.PERSONAL_DETAILS_UPDATED,
      timestamp: new Date().toISOString(),
      data: personalDetails,
      userId: personalDetails.userId
    });
    console.log('Personal details updated event published');
  } catch (error) {
    console.error('Error publishing personal details updated event:', error);
    throw error;
  }
};

// Publish professional details created event
const emitProfessionalDetailsCreated = async (professionalDetails) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.PROFESSIONAL_DETAILS_CREATED, {
      eventType: USER_INFORMATION_EVENTS.PROFESSIONAL_DETAILS_CREATED,
      timestamp: new Date().toISOString(),
      data: professionalDetails,
      profileId: professionalDetails.profileId
    });
    console.log('Professional details created event published');
  } catch (error) {
    console.error('Error publishing professional details created event:', error);
    throw error;
  }
};

// Publish professional details updated event
const emitProfessionalDetailsUpdated = async (professionalDetails) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.PROFESSIONAL_DETAILS_UPDATED, {
      eventType: USER_INFORMATION_EVENTS.PROFESSIONAL_DETAILS_UPDATED,
      timestamp: new Date().toISOString(),
      data: professionalDetails,
      profileId: professionalDetails.profileId
    });
    console.log('Professional details updated event published');
  } catch (error) {
    console.error('Error publishing professional details updated event:', error);
    throw error;
  }
};

// Publish subscription details created event
const emitSubscriptionDetailsCreated = async (subscriptionDetails) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.SUBSCRIPTION_DETAILS_CREATED, {
      eventType: USER_INFORMATION_EVENTS.SUBSCRIPTION_DETAILS_CREATED,
      timestamp: new Date().toISOString(),
      data: subscriptionDetails,
      profileId: subscriptionDetails.profileId
    });
    console.log('Subscription details created event published');
  } catch (error) {
    console.error('Error publishing subscription details created event:', error);
    throw error;
  }
};

// Publish subscription details updated event
const emitSubscriptionDetailsUpdated = async (subscriptionDetails) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.SUBSCRIPTION_DETAILS_UPDATED, {
      eventType: USER_INFORMATION_EVENTS.SUBSCRIPTION_DETAILS_UPDATED,
      timestamp: new Date().toISOString(),
      data: subscriptionDetails,
      profileId: subscriptionDetails.profileId
    });
    console.log('Subscription details updated event published');
  } catch (error) {
    console.error('Error publishing subscription details updated event:', error);
    throw error;
  }
};

// Publish complete user information submitted event
const emitUserInformationSubmitted = async (userInformation) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.USER_INFORMATION_SUBMITTED, {
      eventType: USER_INFORMATION_EVENTS.USER_INFORMATION_SUBMITTED,
      timestamp: new Date().toISOString(),
      data: userInformation,
      userId: userInformation.personalDetails?.userId
    });
    console.log('User information submitted event published');
  } catch (error) {
    console.error('Error publishing user information submitted event:', error);
    throw error;
  }
};

// Publish user information updated event
const emitUserInformationUpdated = async (userInformation) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.USER_INFORMATION_UPDATED, {
      eventType: USER_INFORMATION_EVENTS.USER_INFORMATION_UPDATED,
      timestamp: new Date().toISOString(),
      data: userInformation,
      userId: userInformation.personalDetails?.userId
    });
    console.log('User information updated event published');
  } catch (error) {
    console.error('Error publishing user information updated event:', error);
    throw error;
  }
};

// Publish user information requested event
const emitUserInformationRequested = async (userId) => {
  try {
    await publishEvent(USER_INFORMATION_EVENTS.USER_INFORMATION_REQUESTED, {
      eventType: USER_INFORMATION_EVENTS.USER_INFORMATION_REQUESTED,
      timestamp: new Date().toISOString(),
      data: { userId },
      userId: userId
    });
    console.log('User information requested event published');
  } catch (error) {
    console.error('Error publishing user information requested event:', error);
    throw error;
  }
};

module.exports = {
  USER_INFORMATION_EVENTS,
  emitPersonalDetailsCreated,
  emitPersonalDetailsUpdated,
  emitProfessionalDetailsCreated,
  emitProfessionalDetailsUpdated,
  emitSubscriptionDetailsCreated,
  emitSubscriptionDetailsUpdated,
  emitUserInformationSubmitted,
  emitUserInformationUpdated,
  emitUserInformationRequested
}; 