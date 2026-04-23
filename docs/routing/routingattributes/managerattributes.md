# Manage Routing Attributes

## Create Routing Attributes

**Required permissions**: Routing Attributes Create

1.  Click the app selector ![icon of app selector](../../../resources/images/icons/appselectoricon.png){.InlineIcon_NoBorder} and select [ACD]{.interface}.
2.  Go to [Contact Settings]{.interface} \> [Routing
    Attributes]{.interface}.
3.  Click [Create New]{.interface}.
4.  Enter a value in the [Routing Attribute Name]{.fieldName} field.
5.  Click [Create Routing Attribute]{.interface}.

## Assign Routing Attributes to Users {#AssignRoutingAttributestoUsers magellan-target="AssignRoutingAttributestoUsers"}

**Required permissions**: [Routing Attributes User
Assignment](../../../admin/security/permissions/acdpermissions.htm#RAttributes)

When you create a [routing
attribute![Closed](../../../../Skins/Default/Stylesheets/Images/transparent.gif){.MCHelpControl_Image_Icon
height="11" width="16" mc-alt2="Open"}[[ ]{.MCTextPopupArrow}Custom
traits you can create and assign to agents for use in routing
scripts]{.MCTextPopupBody .popupBody}](#){.MCTextPopup
.MCTextPopupHotSpot .MCTextPopup_Open .glossaryTerm .glossaryTermPopup
.MCTextPopupHotSpot_ .MCTextPopupHotSpot_Popup
glossterm="CXone.Term167"}, you must assign it to users. You can do this
from either the user account page or the routing attribute page.

### Assign Routing Attributes to User Accounts

::::: {.MCDropDown .MCDropDown_Closed .dropDown}
[[![Closed](../../../../Skins/Default/Stylesheets/Images/transparent.gif){.MCDropDown_Image_Icon
height="11" width="16" mc-alt2="Open"}View image of the Routing
Attributes tab in a](#){.MCDropDownHotSpot .dropDownHotspot
.MCDropDownHotSpot_ .MCHotSpotImage aria-expanded="false"}n ACD user
profile]{.MCDropDownHead .dropDownHead}

:::: {.MCDropDownBody .dropDownBody}
::: {mc-conditions="Outputs.Blue"}
![Shows an image of the Routing Attributes tab in a user account. The
user has been assigned a routing attribute named
French.](images/loc_userrecordrattributestab.png)
:::
::::
:::::

1.  Click the app selector ![icon of app
    selector](../../../resources/images/icons/appselectoricon.png){.InlineIcon_NoBorder}
    and select [ACD]{.interface}.

2.  Go to [ACD Users]{.interface}.

3.  Click the user you want to assign routing attributes to.

4.  Click the [Routing Attributes]{.interface} tab.

5.  In the Add Routing Attributes section, select the checkboxes next to
    the routing attributes you want to assign to the user. Click [Add
    Routing Attributes]{.interface}.

    The selected attributes move to the [Assigned Routing
    Attributes]{.interface} section.

### Assign Users to Routing Attributes

**Required permissions**: [Routing Attributes
Edit](../../../admin/security/permissions/acdpermissions.htm#RAttributes)

::::: {.MCDropDown .MCDropDown_Closed .dropDown}
[[![Closed](../../../../Skins/Default/Stylesheets/Images/transparent.gif){.MCDropDown_Image_Icon
height="11" width="16" mc-alt2="Open"}View image of the Users tab in a
routing attribute profile](#){.MCDropDownHotSpot .dropDownHotspot
.MCDropDownHotSpot_ .MCHotSpotImage
aria-expanded="false"}]{.MCDropDownHead .dropDownHead}

:::: {.MCDropDownBody .dropDownBody}
::: {}
![Shows an image of the Routing Attributes tab in a user account. The
user has been assigned a routing attribute named
French.](images/loc_rattributesuserstab.png)
:::
::::
:::::

1.  Click the app selector ![icon of app
    selector](../../../resources/images/icons/appselectoricon.png){.InlineIcon_NoBorder}
    and select [ACD]{.interface}.

2.  Go to [Routing Attributes]{.interface}.

3.  Click the routing attribute you want to assign users to.

4.  Click the [Users]{.interface} tab.

5.  In the Add Users section, select the checkboxes next to the users
    you want to assign to the routing attribute. Click [Add
    Users]{.interface}.

    The selected users move to the [Assigned Users]{.interface} section.

## Deactivate Routing Attributes {#DeactivateRoutingAttributes magellan-target="DeactivateRoutingAttributes"}

**Required permissions**: [Routing Attributes
Deactivate](../../../admin/security/permissions/acdpermissions.htm#RAttributes)

You can have up to 5,000 active routing attributes in your [CXone
Mpower]{.mc-variable .DoNotTranslateProductNames.PlatformNameShort
.variable} system. You can deactivate routing attributes as needed to
stay within the limit. You can reactivate them later if you need to.
Deactivation and activation happen immediately. If you don\'t see an
attribute you want to reactivate in the Routing Attributes list, make
sure the [Show]{.fieldName} field in the upper right corner is set
correctly.

1.  Click the app selector ![icon of app
    selector](../../../resources/images/icons/appselectoricon.png){.InlineIcon_NoBorder}
    and select [ACD]{.interface}.
2.  Go to [Routing Attributes]{.interface}.
3.  Click the routing attribute you want to deactivate.
4.  Click [Deactivate]{.interface}.

## Use a Routing Attribute {#UseaRoutingAttribute magellan-target="UseaRoutingAttribute"}

You can apply routing attributes as ACD routing criteria in the
[Reqagent](../../../studio/actions/reqagent/reqagent.htm){target="_blank"
mc-conditions="Outputs.DoNotTranslate"},
[UpdateContact](../../../studio/actions/updatecontact/updatecontact.htm){target="_blank"
mc-conditions="Outputs.DoNotTranslate"},
[Queuevm](../../../studio/actions/queuevm/queuevm.htm){target="_blank"
mc-conditions="Outputs.DoNotTranslate"},
[Queuecallback](../../../studio/actions/queuecallback/queuecallback.htm){target="_blank"
mc-conditions="Outputs.DoNotTranslate"}, and
[CountAgents](../../../studio/actions/countagents/countagents.htm){target="_blank"
mc-conditions="Outputs.DoNotTranslate"} [Studio]{.mc-variable
.DoNotTranslateProductNames.Studio .variable} actions. The action must
still specify an
[ACD skill![Closed](../../../../Skins/Default/Stylesheets/Images/transparent.gif){.MCHelpControl_Image_Icon
height="11" width="16" mc-alt2="Open"}[[ ]{.MCTextPopupArrow}Used to
automate delivery of interactions based on agent skills, abilities, and
knowledge.]{.MCTextPopupBody .popupBody}](#){.MCTextPopup
.MCTextPopupHotSpot .MCTextPopup_Open .glossaryTerm .glossaryTermPopup
.MCTextPopupHotSpot_ .MCTextPopupHotSpot_Popup glossterm="CXone.Term5"}
and may also specify a low and high ACD skill
[proficiency![Closed](../../../../Skins/Default/Stylesheets/Images/transparent.gif){.MCHelpControl_Image_Icon
height="11" width="16" mc-alt2="Open"}[[ ]{.MCTextPopupArrow}The level
of expertise an agent has in an ACD skill. Helps determine which agents
to route interactions to for that skill.]{.MCTextPopupBody
.popupBody}](#){.MCTextPopup .MCTextPopupHotSpot .MCTextPopup_Open
.glossaryTerm .MCTextPopupHotSpot_ glossterm="CXone.Term178"} range for
additional [bullseye routing](../bullseyerouting.htm){target="_blank"}
criteria.

You must have [[dynamic delivery]{.mc-variable
.Terminology.DynamicDeliveryLC
.variable}](../dynamicdelivery/dynamicdelivery.htm){target="_blank"}
enabled to assign more than one routing attribute per interaction.

These steps assume you already have your [Studio]{.mc-variable
.DoNotTranslateProductNames.Studio .variable} routing scripts set up. If
you haven\'t done that and you\'re new to [Studio]{.mc-variable
.DoNotTranslateProductNames.Studio .variable}, see
[Desktop Studio Fundamentals](../../../studio/fundamentals/fundamentals.htm){.MCXref
.xref} to get started. You can also contact your [Account
Representative]{.mc-variable .Phrases.AccountRep .variable} for help.

**Required permissions**: [Studio Scripts
Create/Edit](../../../admin/security/permissions/acdpermissions.htm#StudioScripts)

1.  In [Studio]{.mc-variable .DoNotTranslateProductNames.Studio
    .variable}, open the script where you want to add routing
    attributes.

2.  Locate the [Reqagent]{.studioAction},
    [UpdateContact]{.studioAction}, [Queuevm]{.studioAction},
    [Queuecallback]{.studioAction}, or [COUNTAGENTS]{.studioAction}
    action where you want to add a routing attribute to the routing
    criteria.

3.  Right-click the chosen action. In the [RoutingAttribute]{.fieldName}
    property, enter the attribute that agents must have to receive an
    interaction from this [Studio]{.mc-variable
    .DoNotTranslateProductNames.Studio .variable} action. You can enter
    more than one attribute, separating them with commas.

    :::: notification-note
    ::: notificationContent
    If you narrow your agent pool too far, your interactions could
    become stuck in queue with no matching agents to route to. To help
    avoid this, use no more than five attributes per routing action.
    :::
    ::::

4.  Repeat the previous step to apply routing attributes to other
    applicable [Studio]{.mc-variable .DoNotTranslateProductNames.Studio
    .variable} actions as needed.

5.  Save the script.

    For all calls that go through the modified action, the ACD will now
    only route them to agents who have both the specified ACD skill and
    the required routing attribute.
:::::::::
