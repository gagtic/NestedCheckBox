import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import NestedCheckBoxes from './src/component/NestedCheckBoxes'

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
        {
          value: 'Child 4',
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
        {
          value: 'Child 2',
          is_checked: false,
        },
        {
          value: 'Child 3',
          is_checked: false,
        },
        {
          value: 'Child 4',
          is_checked: false,
        },
      ]
    },
    {
      parent: 'Parent 3',
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
        {
          value: 'Child 4',
          is_checked: false,
        },
      ]
    },
  ])

  useEffect(() => console.log('DATA UPDATED', JSON.stringify(data)), [data])

  const handleParent = (new_value, parent_index) => {
    let update_arr = [...data]
    update_arr[parent_index].is_checked = new_value
    setData(update_arr)
  }

  const handleChild = (new_value, parent_index, child_index) => {
    let update_arr = [...data];
    update_arr[parent_index].children[child_index].is_checked = new_value
    setData(update_arr)
  }

  const handleStrictChild = (new_value, parent_index, child_index) => {
    console.log('inside strict')
    if (!new_value) {
      console.log(update_arr[parent_index].children.find(({is_checked}) => is_checked == true));
    }
    let update_arr = [...data];
    if (!update_arr[parent_index].is_checked && new_value)
      update_arr[parent_index].is_checked = new_value
    update_arr[parent_index].children[child_index].is_checked = new_value
    setData(update_arr)
  }

  return (
    <View>
      <NestedCheckBoxes
        data_list={data}
        handleParent={handleParent}
        handleChild={handleChild}
      />

    </View>
  )
}

export default App;