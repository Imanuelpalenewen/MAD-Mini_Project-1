import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const myExperience = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Experience page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    }, content: {
        fontSize:22
    }
})
    
export default myExperience