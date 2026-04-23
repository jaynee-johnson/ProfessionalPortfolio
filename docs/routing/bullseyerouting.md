# Bullseye Routing

Bullseye routing lets you use agent proficiency, [routing attributes](routingattributes/routingattributes.md), or both in your
call scripting to dynamically add or remove agents from the available pool. This lets you better manage contact wait time and ensure that interactions are assigned both to a qualified agent and in a timely manner.

## Bullseye Routing with Skill Proficiency

When you assign agents to a skill, you also indicate their proficiency for that skill. For example, you could assign agents to a Spanish skill and set a higher or lower proficiency based on their fluency in the language. Then, for bullseye routing, you would configure Studio actions to adjust the acceptable skill proficiency and expand the agent pool when contacts are waiting too long for an agent.

**Example**: 
Classics, Inc., is experiencing a higher than anticipated number of interactions since the company entered the Italian market. The
administrator, Marguerite Blakeney, wants to use bullseye routing to prevent contact wait time from exceeding her SLA. She takes the following steps to do so:
- Marguerite reviews her Italian agents to make sure she has their proficiency levels correctly assigned.
- She pulls some reports, such as the Skill Performance  Report, to help her understand which skills are experiencing long wait times
  for contacts in queue.
- Marguerite and her Studio developer review her routing scripts for each skill that has long wait times.
- For each of these skills, they configure the **REQAGENT** action to establish the skill proficiency range for the interaction when it initially enters the queue. For example, for the **REQAGENT** action in the Fiction skill, they set **HighProficiency** to ***1*** and **LowProficiency** to ***5***.
- A **Music** action follows the **REQAGENT** action, and they configure it to play for 90 seconds.
- After the **Music** action, they add an **UpdateContact** action with **HighProficiency** set to ***1*** and **LowProficiency** set to ***8***.

Once in place, the revised script broadens the pool of agents available to take the interaction when the contact has been waiting for 90
seconds. This helps ensure contacts reach an agent who can help them satisfactorily and more quickly.

**Important**:
If you use WFM, review the documentation for your WFM product before you set up bullseye routing. Determine the best practices and potential forecasting impacts of using bullseye routing with proficiency ranges,routing attributes, or both.
- If you use IEX WFM, review the *Distribution Rules Guide*.
- If you use WFM, review the WFM online help.

## Key Facts About Bullseye Routing with Skill Proficiency

- You can use bullseye routing with skill proficiency either alone or together with [routing attributes](routingattributes/routingattributes.md). In the preceding example, Marguerite assigned proficiency based on the agent\'s fiction book knowledge. She also uses routing attributes to define the language of the agent. This combination helps her ensure the best experience for Classics customers. To see how that\'s set up, click the link in the first sentence of this bullet. Routing attributes are currently in controlled release. To learn more, contact your Account Representative.
- You can assign proficiencies to agents in either the ACD user profile record.
- Bullseye routing can be configured in the **COUNTAGENTS**, **GETQUEUE**, **REQAGENT**, and **UpdateContact** Studio actions.