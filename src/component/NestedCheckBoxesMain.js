import React, { useState } from 'react'
import { View } from 'react-native'
import NestedCheckBoxes from './NestedCheckBoxes'

const NestedCheckBoxesMain = ({data_list}) => {
  const [data, setData] = useState(data_list)

  const handleParent = (new_value, parent_index) => {
    let update_arr = [...data_list]
    update_arr[parent_index].is_checked = new_value
    setData(update_arr)
  }

  const handleChild = (new_value, parent_index, child_index) => {
    let update_arr = [...data_list];
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

export default NestedCheckBoxesMain;