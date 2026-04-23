# Routing

You can choose from two different CXone Mpower routing experiences for your contact center: [static delivery](staticdelivery/staticdelivery.md) and [dynamic delivery](dynamicdelivery/dynamicdelivery.md).

- **Static delivery**: The legacy CXone Mpower routing experience. It routes interactions based on agent availability and[proficiency in the related skill. It allows agents to handle one contact at a time, with the exception of multiple concurrent chats and email parking.

- **Dynamic delivery**: The recommended routing experience. It gives you more control over the routing decision-making process. With it, you can change how routing works based on the interaction, team, agent, or skill. Dynamic delivery is the default routing
  experience for new tenants.

## Supported Features and Functionality

This table shows what the static delivery and dynamic delivery routing options support:

| Category | Component | Static Delivery | Dynamic Delivery |
| -------- | --------- | --------------- | ---------------- |
| Evaluate by | Skill Proficiency | X | X |                                                       
|          | Longest available | X | X |
|          | Preferred agent   |   | X |
|          | Most occupied |   | X |
|          | Least occupied |   | X |
|          | AI modeling |   | X |
| Route by | Skill routing | X | X |
|          | [Bullseye routing](bullseyerouting.md) | X | X |
|          | Single [routing attribute](routingattributes/routingattributes.md) | X | X |
|          | Multiple routing attributes |   | X |
|          |Digital routing  | Separate routing system | X |
| User/team settings | **Request Contact** |   | X |
|                    | **Channel Lock** |   | X |
|                    | **Contact Auto-Focus** |   | X |
|                    | Concurrent chats (**Maximum Concurrent Chats**) |   | X  |
|                    | Manual email parking | X | X |
|                    | Auto email parking (**Maximum Email Auto-Parking Limit**) **Note**: This feature isn\'t supported in digital email channels. | X |   |
|                    | Email interruption | X |   |
| Handling features | Contact elevation: Agents can elevate a contact from one channel to another. |   | X |
| Agent applications | Salesforce Agent | X | X |
|                    | Agent |   | X |
|                    | Agent Embedded |   | X |
|                    | Agent for Microsoft Teams |   | X |
|                    | Agent Integrated |  | X |
|                    |MAX | X | X |

## Routing Breakdown

The routing criteria for an interaction consists of:

- The skill associated with the interaction in queue.
- The priority of the interaction when placed in the queue.
- The [bullseye](bullseyerouting.md) range of skill proficiencies the agent must have to receive the interaction.

- The [attribute](routingattributes/routingattributes.md) defined for the skill that an agent must be assigned to receive the
  interaction.

A skill channel consists of:

- Voice
- Chat
- Email
- SMS
- Work item
- Social

The skill evaluation criteria consists of:

- Skill proficiency assigned to the agent.
- The amount of time an agent has been in an Available state
- AI focus metric
  - Average Handle Time
  - Average Talk Time
  - Sentiment