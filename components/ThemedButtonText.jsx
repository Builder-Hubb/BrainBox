import { Text } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../Constants/Colors'; // adjust the path if needed

export default function ThemedButtonText({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
      <Text style={[{ color: theme.buttonText }, style]}  {...props} />
  );
}
