# Salesforce-lookup-custom-component-LWC


My custom lookup component using Lightning Web Components.

To use you need to put some attributes in parent component
```
<c-lookup
label=""
object-api-name=""
field-set-name=""
second-field=""
is-readonly=""
is-required=""
icon-name=""
onlookupchanged=""
></c-lookup>
```
- ***label*** name of the input e.g. *Search Accounts*, *Opportunities...*,
- ***object-api-name*** api name of an object that you want to query, e.g. *Account*, *Opportunity*,
- ***field-set-name*** api name of you field set. Quried fields depends on that fieldset,
- ***second-field*** api name of the second field that you also want to show on each record when list show up. If you dont need second field put empty bracket here,
- ***is-readonly*** true/false, if you want this field to be readonly or not,
- ***is-required*** true/false, if you want this fields to be choose or not,
- ***icon-name*** icon name to be shows on each record in list, [https://www.lightningdesignsystem.com/icons/]
- ***onlookupchanged*** custom event to pass data to parent, catch this with your function (contains *Id* and *Record name*).
