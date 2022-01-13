# react-native-nested-checboxes

`react-native-nested-checboxes` is the simple implementation of checkboxes in nested style. They can be used when data is in a parent-child relation and needed to be selected.

<img src="https://raw.githubusercontent.com/gagtic/NestedCheckBox/master/preview/nested_checbox.gif" width="180">

# Getting started
## Installation
```bash
npm i react-native-nested-checboxes
```
Please Make sure that imported `react-native-nested-checboxes` is v2.0.1 or above
```json
"react-native-nested-checboxes": "^2.0.1",
```

You would also need `@react-native-community/checkbox` for this.
```bash
npm install @react-native-community/checkbox
```
You would also need `react-native-vector-icons` for this.
```bash
npm install react-native-vector-icons
```

## Linking
From react-native >= 0.60 autolinking will take care of the link (on iOS and Android)

# Usage
## Import
Import the library like any other module
```javascript
import NestedCheckBoxesMain from 'react-native-nested-checboxes'
```
# Input
`react-native-nested-checboxes` takes customized input of a hierarchical object, that then will be used to form a parent child related checkbox. 
 ### Example
 ```javascript
const [data, setData] = useState([
    {
      parent: 'Parent 1',
      is_checked: false,
      children: [
        {
          value: 'Child 1',
          is_checked: false,
        },
        {
          value: 'Child 2',
          is_checked: false,
        },
        {
          value: 'Child 3',
          is_checked: false,
        },
      ]
    },
    {
      parent: 'Parent 2',
      is_checked: false,
      children: [
        {
          value: 'Child 1',
          is_checked: false,
        },
      ]
    },
  ])
 ```
 # Usage

 The user can set any amount of childern that are assigned to a single parent.
 ```javascript
      <NestedCheckBoxesMain
        data_list={data}
      />
 ```

 When any of the box is pressed, it's subsequent `is_checked` will be toggled true.

 ```javascript
 //...
{
      parent: 'Parent 1',
      is_checked: false,        //<-this will be updated
      children: [
        {
          value: 'Child 1',
          is_checked: false,    //<-this will be updated
        },
        {
          //..
 //...
        }
}
 ```
 
 # Properties
| Property        | Default           | Description  |
| -------------   |:-------------:    | :-----       |
| data_list       | `Check Example`   | Input data which will be manipulated by the library        |

# Future Prospects
I will be adding a strict mode to the library that wil not allow parent to be unselected while any child is selected. That mode will usually cover usecase of showing weather all the childern are selected or not.

Furthermore I will be adding a stylized list expanding feature that will be better for organizing large amount of data.