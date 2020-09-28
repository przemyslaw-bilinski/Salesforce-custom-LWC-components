# Salesforce custom components

## Lookup component (/lookup)
My custom lookup component using Lightning Web Components.

To use you need to put some attributes in parent component
```html
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
- ***is-required*** true/false, if you want this fields to be required or not,
- ***icon-name*** icon which appear on each record in list, [https://www.lightningdesignsystem.com/icons/]
- ***onlookupchanged*** custom event to pass data to parent, catch this with your function (contains *Id* and *Record name*).
<pre>
</pre>
<p align="center">
  <p>Example:</p>
  <img width="60%" src="https://github.com/bilinskip/Salesforce-lookup-custom-component-LWC/blob/master/lookup-example.png">
</p>

## Toast Utils (/toastUtils)
Custom component to fire toast messages easily.

Sample usage:
```js
import { showToast, SUCCESS, ERROR } from "c/toastUtils";

showToast(this, {
    title: 'Success',
    message: 'Record successfully saved!',
    variant: SUCCESS
});
// or
showToast(this, {
    title: 'Error',
    variant: ERROR
});
```

## Access Control (/accessControl)
Custom component to wrap some content and render only if specific user has Custom Permission assigned. 

Sample usage:
```html
<c-access-control
    allow-access="SampleCustomPermission"
    error-message="You don't have enough permission to use this component"
>
    <p>Hello World!</p>
</c-access-control>
```

The content will be dispalyed only if user has 'SampleCustomPermission' Custom Permission assigned. If not, component will provide error message defined as a parameter.