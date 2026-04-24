# AI Routing

AI Routing is an advanced routing solution that uses AI and machine learning to optimize interactions. It uses a wide range of data to
predict the best connections between contacts and agents. This can help improve the contact experience and efficiency.

AI Routing follows this process:

1.  You choose a KPI as the most important target metric for a given ACD skill. For example, you might choose average
    handle time.
2.  AI Routing generates a model for the target metric. It predicts a the best outcome by finding patterns across agent, CX, and contact data.
3.  When a contact enters CXone Mpower, it's paired with the best possible agent for meeting the target metric.

## Key Facts About AI Routing

- You can configure AI Routing for any ACD inbound voice skill.
- Data and models used by AI Routing refresh regularly to maintain accuracy and adapt to changing contact behavior.
- AI Routing continuously learns from feedback and previous interactions. This helps improve routing decisions.
- Prebuilt reports show the impact of AI Routing on KPIs and provide insights into trends over time.
- When you choose a focus metric for your skill, you also select the weight. The weight setting determines how heavily AI Routing favors agents likely to meet your KPI over agents who have been underutilized.
- You can use A/B toggle settings to measure the impact of routing decisions. This lets you precisely evaluate KPI improvements.
- If AI Routing times out, the CXone Mpower ACD instead uses the default routing methodology.
- You must have [dynamic delivery](dynamicdelivery/dynamicdelivery.md) enabled to use AI Routing.
- You can use AI Routing with bullseye routing. See the Routing Methodologies section of this page for more information.
- AI Routing uses the Process Communication Model.

## Routing Methodologies

AI Routing works seamlessly with [attribute-based routing](routingattributes/routingattributes.md) and [bullseye routing](bullseyerouting.md). Attribute-based routing lets you limit the pool of potential agents based an agent attribute that you choose. AI Routing considers and uses the routing attributes decision-making process.

Depending on the configuration of bullseyerouting, the pool of agents AI Routing may decrease. However, AI Routing can still pair
contacts with the best available agents from the reduced pool.

**Learn more from a use case**:

Marguerite Blakeney, the administrator at Classics, Inc., wants to improve her company's Average Handle Time (AHT). To do so, she takes the following steps using bullseye routing together:
- Marguerite reviews her agents to make sure she has their proficiency levels correctly assigned.
- She pulls some reports, such as the Skill Performance Report, to help her understand which inbound phone ACD skills have high AHT.
- Marguerite and her Studio developer review her routing scripts for each ACD skill that has high AHT.
- For each of these ACD skills, they use the **REQAGENT** action to establish the ACD skill proficiency range for the interaction when
  it initially enters the queue. For example, for the **REQAGENT** action in the Fiction ACD skill, they set **HighProficiency** to ***1*** and **LowProficiency** to ***5***.
- Marguerite configures AI Routing for those inbound voice ACD skills.

Marguerite can now pull the Enlighten AI Routing Summary Report. This helps her understand the difference in call outcomes when
AI Routing is used and when it is not used.

## Data Sources

AI Routing uses many data sources to make accurate predictions and the best routing decisions. These include:

- **Customer Experience (CX) Data**: Historical contact interactions such as call transcripts, chat logs, and customer feedback. This data is analyzed to identify patterns and trends.
- **Agent Data**: Agent ACD skills, performance metrics, availability, and historical routing patterns. This is used to match contacts with the most suitable agents.
- **Customer Data**: Contact profiles, preferences, and past interactions. This is used to personalize routing decisions and improve the selected KPI.

Together with this data, AI Routing uses algorithms that continuously learn and refine the routing models.