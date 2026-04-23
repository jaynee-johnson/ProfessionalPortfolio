# Dynamic Delivery 

Dynamic delivery is the recommended Routing method. It gives you more granular control over the routing decision-making process with routing options at the interaction, team, agent, and skill level. For example, you can have an agent who can handle only one interaction at a time and another agent who can handle multiple chats, emails, and work items while on a phone call.

Interactions in a dynamic delivery environment route based on how long agents have been Available, the agents\' configured proficiency level in the skill, and, if you\'ve enabled AI Routing, which agent is most likely to help you meet goals related to your target metric. You can narrow the agent pool by setting up [bullseye routing](../bullseyerouting.md), a [routing attribute](../routingattributes/routingattributes.md), or both. If you\'re part of the controlled release (CR) program, you can use multiple routing attributes.

# Key Facts About Dynamic Delivery

- The alternative to dynamic delivery is [static delivery](../staticdelivery/staticdelivery.md). Static delivery is the legacy routing method. For information about what features and functionalities are supported in static and dynamic delivery, see the CXone Mpower routing [supported features table](../routing.md).
- Dynamic delivery is supported in MAX, Salesforce Agent, Agent, Agent Embedded, Agent for Microsoft Teams, or Agent Integrated.
- Dynamic delivery is required if your organization uses Agent, Agent Embedded, Agent for Microsoft Teams, or Agent Integrated.
- Dynamic delivery doesn\'t support Advanced Chat v1. It does support Advanced Chat v2 in MAX only, but without co-browse.
- When you enable dynamic delivery, some settings you used in static delivery are no longer available. This includes the email ACD skill setting, the Email Parking setting, and the team and ACD user **Auto-Park Emails** setting.
- Dynamic delivery offers two options for contact delivery:
  - **Automatic delivery**: The agent receives one voice contact plus as many digital chat, email, or work item contacts as you allow. The delivery pace is about 15 seconds. This option doesn\'t have load balancing. If the agent rejects a contact, they continue to receive requests until the queue is empty or they meet the configured interaction threshold.
  - **Agent request delivery**: The agent receives one voice contact plus one chat, email, or work item contact. They can click a **+1 Contact** button to take on another chat, email, or work item contact. They cannot choose which contact type will be delivered. It\'s based on the ACD skill [priority and acceleration settings](configureskillpriority.md). The agent can continue to add interactions until they meet the configured interaction threshold.
- You can enable **Channel Lock** to switch from an AND type of omnichannel methodology to an OR type of omnichannel methodology. For example:
  - With **Channel Lock** off, an agent configured with a **Total Contact Count** of ***3*** can receive one voice and two chat interactions at the same time.
  - With **Channel Lock** on, an agent with a **Total Contact Count** of ***3*** can receive one voice OR two chat interactions, but not both at the same time. When the agent\'s interactions in that channel have ended, they will be able to receive interactions from any configured channel.
  **Note**: An agent with channel lock may not reach their **Total Contact Count**. Instead, they are limited to the channel capacity that they are currently locked to.
- All agents can elevate contacts to a different channel.
- The agent Refused state has different rules for dynamic delivery. When an Available agent refuses a contact of any type, they enter a ***Refused*** state. When a Working agent refuses a digital interaction or allows it to time out, they don\'t enter a Refused state. If you use automatic delivery, the agent receives requests until they have the maximum number of interactions, they become Unavailable, or the queue is empty. If an agent is connected to the agent leg, they cannot refuse a contact.
- For reporting purposes, dynamic delivery tracks the agent focus time for each interaction. While an agent can see multiple digital interactions at once, only one of them can receive focus time. CXone Mpower determines the interaction in focus from:
  - Where the agent\'s cursor is.
  - Which part of the agent application interface is active.
- Dynamic delivery is reported in the following metrics:
  - Concurrent Time
  - Agent Time
  - Productivity Rate
  - Elevations
  - Elevated
  - Parent ContactID