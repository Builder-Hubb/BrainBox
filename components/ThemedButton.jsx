import { TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../Constants/Colors';

export default function ThemedButton({ onPress, style, ...props }) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <TouchableOpacity
            onPress={onPress} style={[{ backgroundColor: theme.buttonBackground }, style]} {...props} />
    );
}
