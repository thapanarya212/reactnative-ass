import React from 'react';
import { View } from 'react-native';
import { SketchCanvas } from '@wwimmo/react-native-sketch-canvas';

const DrawingField = () => {
  return (
    <View style={{ height: 200, borderWidth: 1 }}>
      <SketchCanvas style={{ flex: 1 }} strokeColor="#000" strokeWidth={3} />
    </View>
  );
};

export default DrawingField;