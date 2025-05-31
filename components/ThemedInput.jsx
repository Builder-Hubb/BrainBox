import { TextInput, useColorScheme } from 'react-native';
import { Colors } from '../Constants/Colors';

const ThemedInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;

  return (
    <TextInput
      style={[ { borderColor: theme.border, color: theme.title }, style, ]}
      placeholderTextColor={theme.placeholder}
      {...props}
    />
  );
};

export default ThemedInput;

