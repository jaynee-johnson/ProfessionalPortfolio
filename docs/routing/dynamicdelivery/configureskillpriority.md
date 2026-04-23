# Configure Priority for a Skill for Dynamic Delivery

**Note**:
This page is specific to a dynamic delivery routing strategy. If your organization uses a static delivery routing strategy, you can [find this information](../staticdelivery/configureskillpriority.htm) in the static delivery online help.

**Required permissions**: Skills Edit

You can control the priority of interactions associated with a particular skill. You choose the initial priority when the interaction
enters the queue and the rate the priority increases over time. This gives you control over which interactions route first when the queue is full. With dynamic delivery as your routing strategy, you can manage the priority of both ACD and digital skills the same way.

**Learn more from a use case**:

The P&P division of Classics, Inc., has a contact center on the Longbourn Estate. The center handles accounting calls from employees and
tenants of the estate and from merchants and tradespeople with whom the estate does business. Mr. Bennet, the center supervisor, wants to make sure that employee and tenant calls always have priority over other calls.

When he creates the voice skills for the center, he assigns an initial priority between 101-200 to skills for employee and tenant calls. He assigns an initial priority of 001-100 to his other skills. Here\'s how this would impact two calls in different types of skills:
- Call #1 comes in on the Employee skill, which has a priority of 110.
- Call #2 comes in on the Merchants skill, which has a priority of 10.
- When an agent becomes available, Call #1 will be delivered first since it has the higher priority.

Mr. Bennet also wants to control how the priority changes for calls over their time in queue. To do this, he uses acceleration. With this setting, the formula becomes Overall Priority = (Time \* Acceleration)+ Initial Priority. Here\'s how this setting impacts two
calls that have been in queue for the same amounts of time:
- Call #1 comes in on the Employee skill, which has a priority of 110. The call has been in queue for 4 minutes. It currently has a priority of 110.
- Call #3 comes in on the Tenants skill, which also has a priority of 110. Because Mr. Bennet wants calls from tenants to be answered in
  the shortest time possible, he has also assigned an acceleration of ***10*** to the Tenants skill. The call has been in queue for 4 minutes. It currently has a priority of 150.
- When an agent becomes available, Call #3 will be delivered first since it has the higher priority.

[Image of priority management section of the CXone skill creation page](images/loc-prioritymanagement.png)

1.  Click the app selector [icon of app selector](images/appselectoricon.png) and select **ACD**.
2.  Go to **Contact Settings** \> **ACD Skills**.
3.  Click the inbound skill you want to edit.
4.  Click **Edit**.
5.  Go to the Priority Management While In Queue section.

Learn more about fields in this step:

| Field | Details |
|-------|---------|
| Initial Priority | Enter a numeric value you want to set as the base level priority for all contacts in an inbound skill or for fresh records and retries in an outbound skill (callbacks always take priority and are not affected by this setting). The default value is ***0***. |
| Acceleration | Enter a numeric value to determine how quickly the priority of the skill increases. For every minute a contact stays in queue, the priority increases by the value you configure for **Acceleration**. The default value is ***1***. The minimum value is ***0*** and the maximum priority is the value configured in the **Maximum Priority** field. For example, if the **Initial Priority** is ***4***, and you set **Acceleration** to ***1***, then with each passing minute that the contact is not handled, the priority increases by one. In this example, if the contact has been in queue for three minutes, then the priority will be raised to ***7***. Priority increments in seconds. For example, when **Acceleration** is ***1***, a contact\'s priority increases by 0.5 after 30 seconds in queue. For Personal Connection skills, set this value to ***0*** because there is no queue of contacts. You can set **Initial Priority** for one skill lower than another skill, but if you set **Acceleration** for that skill higher, it can jump spots in the queue. For example, you set **Initial Priority** for Skill A to ***1*** and **Acceleration** to ***5***. You set **Initial Priority** for Skill B to ***3*** and **Acceleration** to ***1***. Initially, a contact for Skill B will be first in queue because it has a priority of ***4***, but after one minute, Skill A will take its place at the top because its priority will be ***6***. CXone Mpower combines the acceleration value with the time the contact has been in queue and the initial priority using the formula  Overall Priority = (Time \* **Acceleration**) + **Initial Priority**. |
| Maximum Priority | Enter a numeric value to determine the maximum priority a contact can have. If you choose not to use **Acceleration**, this value should match the **Initial Priority**. The default value is ***1000***. |
| Priority Initial Priority | Only for Personal Connection voice skills. The base level setting for Personal Connection priority records, or hot records. A record is a priority record if you stored a boolean indicator in the record and mapped that field to the Priority system field to flag it as requiring priority handling. Personal Connection pushes the record to the front of the queue so the next available agent can take it. The default value is ***1500*** to ensure that these records receive attention before normal records. |
| Reschedule Priority | Only for Personal Connection voice skills. The priority for calls that an agent reschedules. The default  priority is ***2000***, which makes rescheduled calls more important than other outbound calls. |