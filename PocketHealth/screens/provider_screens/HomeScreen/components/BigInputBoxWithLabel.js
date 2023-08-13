import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

const BigInputBoxWithLabel = ({ 
  label, 
  value, 
  onChange, 
  width, 
  backgroundColor = '#FFFFFF', 
  ...props 
}) => {
  return (
    <View style={[styles.boxContainer, {width:width}]}>
      <View style={[styles.valueContainer, {backgroundColor: backgroundColor}]}>
        <View style={styles.labelValueContainer}>
          <Text style={styles.boxLabel}>{label}</Text>
          <ScrollView>
            <TextInput
              style={styles.boxField}
              value={value}
              onChangeText={onChange}
              multiline
              {...props}
            />
          </ScrollView>
        </View>        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {    
    marginBottom: 10, 
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#7C7C7C',
    borderRadius: 15,
    paddingHorizontal: 10,    
    paddingTop:5,   
  },
  labelValueContainer: {
    flex: 1,
    minHeight: 60,
    maxHeight: 200,
  },
  boxLabel: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 5,
  },
  boxField: {
    fontSize: 20,
    borderWidth: 0,  // Ensure no border shows
    color: 'black'   // Set text color
  },  
});

export default BigInputBoxWithLabel;
