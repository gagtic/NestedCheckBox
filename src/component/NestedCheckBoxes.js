import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const NestedCheckBoxes = ({
  data_list,
  handleParent,
  handleChild,
  handleStrictChild,
  strict_mode
}) => {
  return (
    <View>
      <View
        style={{ flexDirection: 'column' }}
      >
        {
          data_list.map(
            ({ parent, is_checked, children }, parent_index) => {
              return (
                <View
                  key={parent_index}>
                  <View

                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <CheckBox
                      value={is_checked}
                      onValueChange={new_value => {
                        handleParent(new_value, parent_index)
                      }}
                    />
                    <Text>{parent}</Text>
                  </View>
                  {
                    children.map(
                      ({ value: child_name, is_checked }, child_index) => {
                        return (
                          <View
                            key={child_index}
                            style={{ flexDirection: 'row', alignItems: 'center', marginStart: 20 }}
                          >
                            <CheckBox
                              value={is_checked}
                              onValueChange={new_value => {

                                strict_mode && handleStrictChild(new_value, parent_index, child_index)
                                handleChild(new_value, parent_index, child_index)
                              }}
                            />
                            <Text>{child_name}</Text>
                          </View>
                        )
                      }
                    )
                  }
                </View>
              )
            }
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  child_container: {
    marginStart: 20,
  }
})

export default NestedCheckBoxes;