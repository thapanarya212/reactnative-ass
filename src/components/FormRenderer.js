import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DrawingField from './DrawingField';

const FormRenderer = ({ formData }) => {
  const renderField = (field) => {
    switch (field.type) {
      case 'text':
        return <TextInput placeholder={field.label} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />;
      case 'date':
        return <Button title={field.label} onPress={() => console.log('Open date picker')} />;
      case 'radio':
        return (
          <View>
            <Text>{field.label}</Text>
            {field.options.map((option, index) => (
              <Button key={index} title={option} onPress={() => console.log(option)} />
            ))}
          </View>
        );
      case 'drawing':
        return <DrawingField />;
      default:
        return null;
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      {formData.fields.map((field, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          {renderField(field)}
        </View>
      ))}
    </View>
  );
};

export default FormRenderer;