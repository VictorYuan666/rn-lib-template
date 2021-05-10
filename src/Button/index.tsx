import { Text, View } from 'react-native';

import React from 'react';

interface IProp {
  /**
   * 按钮文字
   * @default 默认值
   */
  text: string;
}

const Button: React.FC<IProp> = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Button;
