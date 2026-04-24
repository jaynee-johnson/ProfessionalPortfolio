# Static Delivery

Static delivery is the legacy CXone Mpower routing method. It limits agents to handling one interaction from one channel at a time,
no matter what team or skill they're assigned to. You can configure the following exceptions:
- In the email skill settings, you can make emails interruptible by an inbound voice interaction.
- In the email skill settings, you can enable automatic email parking so agents can delay an email response in favor of other work.
- At the team or user level, you can enable agents to handle up to 12 concurrent chats. User settings override team settings.

The static delivery decision-making process is simple. It routes interactions based on how long agents have been Available and the agents' configured proficiency level in the skill. You can narrow the agent pool by setting up [bullseye routing](../bullseyerouting.md) or a single [routing attribute](../routingattributes/routingattributes.md).

## Key Facts About Static Delivery

- The alternative to static delivery is [dynamic delivery](../dynamicdelivery/dynamicdelivery.md). Dynamic delivery is the recommended routing method. For information about what features and functionalities are supported in static and dynamic delivery, see the CXone Mpower routing [supported features table](../routing.md).
- Static delivery is supported in MAX and Salesforce Agent. If your organization uses Agent, Agent Embedded, Agent for Microsoft Teams, or Agent Integrated, you must
  use [dynamic delivery](../dynamicdelivery/dynamicdelivery.md).