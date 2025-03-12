import React, { useState } from 'react';
import { View, Button, TextInput, Alert } from 'react-native';
import FormRenderer from '../components/FormRenderer';
import { parseXML } from '../utils/xmlParser';

const HomeScreen = () => {
  const [xmlInput, setXmlInput] = useState('');
  const [formData, setFormData] = useState(null);

  const handleRenderFromFile = async () => {
    try {
      // Load predefined XML file (e.g., from assets)
      const response = await fetch('./path/to/predefined.xml');
      const xmlText = await response.text();
      const parsedData = await parseXML(xmlText);
      setFormData(parsedData);
    } catch (error) {
      Alert.alert('Error', 'Failed to load or parse XML file.');
    }
  };

  const handleRenderFromInput = async () => {
    try {
      const parsedData = await parseXML(xmlInput);
      setFormData(parsedData);
    } catch (error) {
      Alert.alert('Error', 'Invalid XML input.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Render Form from XML File" onPress={handleRenderFromFile} />
      <TextInput
        placeholder="Paste XML here"
        multiline
        value={xmlInput}
        onChangeText={setXmlInput}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Render Form from XML Input" onPress={handleRenderFromInput} />
      {formData && <FormRenderer formData={formData} />}
    </View>
  );
};

export default HomeScreen;