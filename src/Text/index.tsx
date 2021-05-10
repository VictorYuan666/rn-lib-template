import { Text as IText } from 'react-native';
import React from 'react';

interface IProp {
  color?: string;
}

const Text: React.FC<IProp> = ({ color, children }) => {
  return <IText style={{ color }}>{children}</IText>;
};

export default Text;
