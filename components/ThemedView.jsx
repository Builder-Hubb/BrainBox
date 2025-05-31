import { View, useColorScheme } from 'react-native';
import { Colors } from "../Constants/Colors.js";

const ThemedView = ({ style, bg = 'background', border = 'border', ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme[bg], borderColor: theme[border] }, style]}
      {...props}
    />
  );
};

export default ThemedView;
