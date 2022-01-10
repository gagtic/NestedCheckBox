# react-native-nested-checkboxes

`react-native-nested-checkboxes` is the simple implementation of checkboxes in nested style. They can be used when data is in a parent-child relation and needed to be selected

# Getting started
## Installation
```bash
npm install react-native-nested-checkboxes
```
You would also need `@react-native-community/checkbox` for this.
```bash
npm install @react-native-community/checkbox
```

## Linking
From react-native >= 0.60 autolinking will take care of the link (on iOS and Android)

for react-native =< 0.59.X

# Usage
## Import
Import the library like any other module
```javascript
import NestedCheckBoxes from 'react-native-nested-checkboxes'
```
# Input
`react-native-nested-checkboxes` takes customized input of a hierarchical object, that then will be used to form a parent child related checkbox. 
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
 The user can set any amount of childern that are assigned to a single parent.
 
| Property        | Default           | Description  |
| -------------   |:-------------:    | -----:       |
| col 3 is        | right-aligned | $1600 |
| col 2 is        | centered      |   $12 |
| zebra stripes   | are neat      |    $1 |