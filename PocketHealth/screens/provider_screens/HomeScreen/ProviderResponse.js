import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ShowcaseBoxWithLabel from '../../../components/ShowcaseBoxWithLabel';
import BigShowcaseBoxWithLabel from '../../../components/BigShowcaseBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';

export default function ProviderResponseScreen({navigation}) { 
    
  const [assessment, setAssessment] = useState('');
  const [futurePlan, setFuturePlan] = useState('');
  const [reasonDoc, setReasonDoc] = useState('');

  const handleSubmit = () => {
    if(assessment === '' || futurePlan === '' || reasonDoc === ''){
      Alert.alert('Missing Input', 'Please enter all required areas',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },               
      ]); 
    }
    else{
      Alert.alert('Are You Sure To Submit?', 'You cannot edit once submitted',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('Success');
            console.log(assessment);
            console.log(futurePlan);
          }
        },
      ]);
    }    
  };

  // DUMMY DATA 

  const firstName = {label: 'First Name', value: 'John'}
  const lastName = {label: 'Last Name', value: 'Doe'}
  const DateOfBirth = {label: 'Date of Birth', value: '1985-07-25'}
  const DateOfService = {label: 'Date of Service', value: '2023-07-21'}
  const location = {label: 'Care Location', value: 'Street Corner Care'}
  const reason = {label: 'Reason for Consultation', value:'Patient feels dizzy after diarrhea'}

  const vitalData = [
      {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8', unit: ''},
      {label: 'Temperature', value: '99', unit: 'F'},
      {label: 'Blood Pressure', value: '120/80', unit:'mmHg'},
      {label: 'Pulse', value: '70', unit:'bpm'},
      {label: 'Oxygen', value: '98', unit:'%'},
      {label: 'Glucose', value: '110', unit:'mg/dl'},  
      {label: 'Weight', value: '150',unit:'Lbs'}, 
  ];

  const medicalData = [
    {   
        label: 'Chronic Illness', 
        value: ' high blood pressure, diabetes'
    },
    {   
        label: 'Current Medication', 
        value: 'Metoprolol'
    },
    {
        label: 'Allergies', 
        value: 'Sulfa'
    },        
  ];

  const medHisData = [
    {   
      label: 'Chronic Illness', 
      value: ' high blood pressure, diabetes'
    },
    {   
      label: 'Current Medication', 
      value: 'Metoprolol'
    },
    {
      label: 'Allergies', 
      value: 'Sulfa'
    },
  ];
    

return (
  <View style={{ flex: 1 }}>

    <View style={{
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            padding: 10, 
            backgroundColor: '#fff', 
            zIndex: 999, 
            elevation: 3, 
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
            <Text>Name: John Doe</Text>
            <Text>DOB: 1985-07-25</Text>
            <Text>DOS: 2023-07-21</Text>
            <Text>Location: Street Corner Care</Text>
      </View>


    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={{...styles.container, paddingTop: 50}}>
      {/* User Meta Data: */}
      <Text style={styles.heading}>Visit Note</Text>
      <View style={{alignItems:'flex-start',width:'100%'}}>
        <Text style={{fontSize:20, marginLeft:5}}>Patient Info</Text>
      </View>

      <View style={{width:'100%',flexDirection:'row'}}>
      <ShowcaseBoxWithLabel
        label={firstName.label}
        value={firstName.value}
        unit=''
        width="45%"
        marginRight={15}        
      />
      <ShowcaseBoxWithLabel
        label={lastName.label}
        value={lastName.value}
        unit=''
        width="45%"    
        marginLeft={15}    
      />
      </View>

      <View style={{width:'100%',flexDirection:'row'}}>
      <ShowcaseBoxWithLabel
        label={DateOfBirth.label}
        value={DateOfBirth.value}
        unit=''
        width="45%"
        marginRight={15}        
      />
      <ShowcaseBoxWithLabel
        label={DateOfService.label}
        value={DateOfService.value}
        unit=''
        width="45%"    
        marginLeft={15}    
      />
      </View>

      <ShowcaseBoxWithLabel
        label={location.label}
        value={location.value}
        unit=''
        width="100%"            
      />


      <BigShowcaseBoxWithLabel
        label={reason.label}
        value={reason.value}
        unit=''
        width="100%"
      />

      
    
      <Text style={{fontSize:18}}>Patient Vitals</Text>

      {vitalData.map((item, index) => (
          <ShowcaseBoxWithLabel
            key={index}
            label={item.label}
            value={item.value}
            unit= {item.unit}
            width="100%"
          />
        ))}
    
      <Text style={{fontSize:18}}>Patient Medical History</Text>

      {medHisData.map((item, index) => (
          <BigShowcaseBoxWithLabel
            key={index}
            label={item.label}
            value={item.value}          
            width="100%"
          />
        ))}
      
      <Text style={{fontSize:20, color:'red'}}>Provider's Input (*required)</Text>

      <View style={{width:"100%"}}>
      <ProviderInputBox 
        label="Reason For Consultation*"
        value={reasonDoc}
        width="100%"
        placeholder="Click to Enter Reason For Consultation ..."
        onChangeText={(text) => setReasonDoc(text)}
      />

      <ProviderInputBox 
        label="Assessment*"
        value={assessment}
        width="100%"
        placeholder="Click to Enter Your Assessment ..."
        onChangeText={(text) => setAssessment(text)}
      />

      <ProviderInputBox 
        label="Future Plan*"
        value={futurePlan}
        width="100%"
        placeholder="Click to Enter Suggested Future Plan ..."
        onChangeText={(text) => setFuturePlan(text)}
      />
      </View>

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    
    </KeyboardAwareScrollView>
    </ScrollView>

  </View>
  );
}