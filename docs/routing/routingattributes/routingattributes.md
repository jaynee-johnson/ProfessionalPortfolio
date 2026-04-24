# Routing Attributes

Routing attributes are a [bullseye routing](../bullseyerouting.md) method. They let you create and manage custom traits to narrow the pool of potential agents within the ACD skill. For example, routing attributes could be languages an agent speaks. They could be state-issued licenses or product certifications that agents have.

You assign routing attributes directly to agents in their user profiles. You then configure them in Studio scripts to route interactions to those agents.

**Learn more from a use case**:

Classics, Inc., is going international. They are hiring agents who speak Spanish, German, French, and Italian. The administrator, Marguerite Blakeney, wants to route interactions to agents based on language. However, she wants to continue using her existing ACD skills.

Marguerite creates five routing attributes. She has one for each of the new languages and one for English. She assigns the attributes to the appropriate agents. Her Studio developer builds a routing script for her. It uses the **REQAGENT** action to assign the appropriate language when placing the interaction in queue. This helps ensure contacts reach an agent who can best help them.

**Important**:
If you use WFM, review the documentation for your WFM product before you set up bullseye routing. Determine the best practices and potential forecasting impacts of using bullseye routing with proficiency ranges, routing attributes, or both.
- If you use IEX WFM, review the *Distribution Rules Guide*.
- If you use WFM, review the WFM online help.

## Key Facts About Routing Attributes

- You can use bullseye routing with routing attributes, with or without ACD [skill proficiencies](../bullseyerouting.md).
**Example**: In the preceding example, Marguerite assigned languages using routing attributes. She also assigns skill proficiency based on the agent's knowledge for a particular ACD skill. This combination helps her ensure the best experience for Classics customers.
- You can configure routing attributes in the **Reqagent**, **UpdateContact**, **Queuevm**, **Queuecallback**, and **CountAgents** Studio actions.
- You can assign multiple routing attributes to the same user.
- You can assign multiple users to the same routing attribute.
- Your Studio script can reference multiple routing attributes at a time if you're using [dynamic delivery](../dynamicdelivery/dynamicdelivery.md). **Important**: If you narrow your agent pool too far, your interactions could become stuck in queue with no matching agents to route to. To help avoid this, use no more than five attributes per routing action.
- You can have as many routing attributes in your tenant as you want. Up to 5,000 can be active at one time.
- You cannot use routing attributes for digital interactions.
- You cannot configure SLAs on routing attributes. This remains at the ACD skill level. However, you can combine ACD skills and attributes for routing in the same script.