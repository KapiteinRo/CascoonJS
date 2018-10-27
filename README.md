# CascoonJS
### A javascript framework providing tooling for interactive HTML forms..
---
## Tooling for web forms
Simple interactive thingies for forms.
Key features consist of:
- Disabling/enabling inputs on demand
- Generating forms using XML/XForms
- Rest form posting (comming soon)

### Disable all checkboxes
Example:
```html
<form id="myform">
    <input type="radio" name="opts" value="opt1" />Enable all
    <input type="radio" name="opts" value="opt2" data-casc-none="chcks" />Disable all
        <ul>
            <li><input type="checkbox" name="chcks" value="1" />Check 1</li>
            <li><input type="checkbox" name="chcks" value="2" />Check 2</li>
            <li><input type="checkbox" name="chcks" value="2" />Check 2</li>
        </ul>
    </form>
    <!-- At the bottom of the page -->
    <script language="javascript">
        Casc$.InitForm('myform', this);
    </script>
```
## XForms renderer
To be implemented

## Contributing
Pull-requests yaddayadda..