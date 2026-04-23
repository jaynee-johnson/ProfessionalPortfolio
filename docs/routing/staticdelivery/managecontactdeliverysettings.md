# Manage Contact Delivery Settings for Static Delivery

**Note**: This page is specific to a static delivery routing strategy. If your organization uses a dynamic delivery routing strategy, you can [find this information](../dynamicdelivery/managecontactdeliverysettings.md) in the dynamic delivery online help.

Static delivery lets you configure multiple chats and automatic email parking at the team or user level. What you configure for a team is overridden by anything you configure at the agent level. You can have a team configured for single-contact handling, where each agent handles one contact from one channel at a time, while one agent on the team is able to handle four chat interactions at the same time.

## Manage Multi-Contact Settings at the Team Level

**Required permissions**: Teams Edit

With static delivery, agents can usually only handle one contact in one channel at a time. However, you can let agents on a team handle multiple concurrent chats or park emails to handle later. Any settings you configure at the team level will be overridden by settings you configure at the user level.

1.  Click the app selector ![icon of app selector](images/appselectoricon.png) and select **Admin**.
2.  Click **Teams** and select the team you want to configure.
3.  Click the **Contact Settings** tab.
4.  Select values from the **Concurrent Chats** and **Auto-Parked Emails** drop-downs to specify the default number of each that agents on the team can handle. **Note**: Auto-parking puts new emails in an agent\'s inbox automatically. This setting lets you specify how many emails can be auto-parked per team member for the entire team. The maximum is ***25***. You can also select ***Off*** to disable this feature for the team.
5.  You can customize the type of contacts that specific agents can receive. For example, you might not want to auto-park emails to new agents. To set custom limits, find an agent in the list and then enter a new value in the field for each agent.
6.  Click **Save**.

## Manage Multi-Contact Settings at the User Level

Concurrent chat and auto-park email settings set at the user level override the same settings made at the team level.

**Required permissions**: ACD Users Edit

1.  Click the app selector ![icon of app selector](images/appselectoricon.png) and select **ACD**.
2.  Click **ACD Users**.
3.  Click the ACD user profile you want to modify.
4.  Click **Contact Settings**. Scroll down to the Contact Handling section.
5.  For **Concurrent Chats**, select ***Custom*** from the drop-down if you want to override the team settings. ***Default*** keeps the team settings applied to the user. Once you select ***Custom***, enter the maximum number of chats you want this user to be able to handle at the same time. The number must be between ***0*** and ***12***.
6.  For **Auto-Parked Emails**, select ***Custom from the drop-down if you want to override the team settings.***Default*** keeps the team settings applied to the user. Once you select ***Custom***, enter the maximum number of emails you want this user to be able to have assigned to them at the same time. The number must be between ***0*** and ***25***.
7.  Scroll to the top and click **Done**.