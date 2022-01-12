import React, { useState } from 'react'
import { View, Text } from 'react-native'
// import NestedCheckBoxesMain from './src/component/NestedCheckBoxesMain'
import NestedCheckBoxesMain from 'react-native-nested-checboxes';

const App = () => {
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

  return (
    <View>
      <Text>Hello World</Text>
      <NestedCheckBoxesMain
        data_list={data}
      />

    </View>
  )
}

export default App;