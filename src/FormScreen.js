import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Signature from 'react-native-signature-canvas';
import CheckBox from '@react-native-community/checkbox'; // Correctly importing CheckBox

const FormScreen = () => {
  const signatureRef = useRef(null);
  const [signature, setSignature] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null); // Store selected checkbox index

  // Signature pad style
  const signatureStyle = `
    .m-signature-pad {
      width: 100%;
      height: 100%;
    }
    .m-signature-pad--body {
      width: 100%;
      height: 100%;
    }
    .m-signature-pad--footer {
      display: none;
    }
  `;

  const handleSignature = (signature) => {
    setSignature(signature);
    console.log('Signature saved:', signature);
  };

  const handleClear = () => {
    if (signatureRef.current) {
      signatureRef.current.clearSignature();
      setSignature(null);
    }
  };

  // Function to handle checkbox selection (Only one can be selected at a time)
  const handleCheckboxToggle = (index) => {
    setSelectedStage((prev) => (prev === index ? null : index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Customer Name</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter customer name"
        placeholderTextColor="#999"
        maxLength={50}
      />

      <Text style={styles.label}>Filename</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter filename"
        placeholderTextColor="#999"
        maxLength={50}
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter date (DD/MM/YY)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        maxLength={8}
      />

      <Text style={styles.label}>Signature</Text>
      <View style={styles.signatureBox}>
        <Signature
          ref={signatureRef}
          onOK={handleSignature}
          webStyle={signatureStyle}
          descriptionText="Sign here"
          penColor="black"
          backgroundColor="white"
        />
      </View>

      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>Clear Signature</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Stages</Text>
      <View style={styles.stagesContainer}>
        {['Stage - 1', 'Stage - 2', 'Stage - 3'].map((stage, index) => (
          <View key={index} style={styles.stageItem}>
            <Text style={styles.stageText}>{stage}</Text>
            <CheckBox
              disabled={false}
              value={selectedStage === index}
              onValueChange={() => handleCheckboxToggle(index)}
              boxType={Platform.OS === 'ios' ? 'square' : undefined} // Fix for iOS
              tintColors={{ true: '#4CAF50', false: '#D32F2F' }} // Green for checked, Red for unchecked
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
    color: '#333',
  },
  inputField: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#333',
  },
  signatureBox: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  clearButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  stagesContainer: {
    marginBottom: 20,
  },
  stageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  stageText: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
});

export default FormScreen;
