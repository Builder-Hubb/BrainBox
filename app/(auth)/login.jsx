import {
    StyleSheet,
    Image,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    View,
    useColorScheme,
    ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { useFonts } from 'expo-font';
import ThemedButton from '../../components/ThemedButton';
import ThemedButtonText from '../../components/ThemedButtonText';
import ThemedInput from '../../components/ThemedInput';
import Google from '../../assets/img/google-icon.png'
import Email from '../../assets/img/mail-icon.png'
import LightLogo from "../../assets/img/apple-light.png"
import DarkLogo from "../../assets/img/apple-dark.png"
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'light' ? LightLogo : DarkLogo
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        'Geist-Regular': require('../../assets/Fonts/static/Geist-Regular.ttf'),
        'Geist-Bold': require('../../assets/Fonts/static/Geist-Bold.ttf'),
    });

    if (!fontsLoaded) return null;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <ThemedView style={styles.container}>
                    <ThemedText style={styles.title} title>
                        Login to your account
                    </ThemedText>

                    <ThemedView style={[
                        styles.inputWrapper,
                        { backgroundColor: colorScheme === 'dark' ? '#232627' : '#F7F8FA' },
                        { borderWidth: colorScheme === 'dark' ? 0 : 1}
                    ]}
                    >
                        <ThemedInput style={styles.input} placeholder="Email" />
                        <Feather
                            name='mail'
                            size={20}
                            color={colorScheme === 'dark' ? '#C2C3CB' : '#757171'}
                        />
                    </ThemedView>

                    <Spacer height={20} />

                    <ThemedView style={[
                        styles.inputWrapper,
                        { backgroundColor: colorScheme === 'dark' ? '#232627' : '#F7F8FA' },
                        { borderWidth: colorScheme === 'dark' ? 0 : 1}
                    ]}>
                        <ThemedInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={!isPasswordVisible}
                        />
                        <Feather
                            name={isPasswordVisible ? 'eye-off' : 'eye'}
                            size={20}
                            color={colorScheme === 'dark' ? '#C2C3CB' : '#757171'}
                            onPress={() => setIsPasswordVisible(prev => !prev)}
                        />
                    </ThemedView>

                    <Spacer height={15} />

                    <TouchableOpacity onPress={() => router.push('/reset')}>
                        <ThemedText style={styles.forgotText}>
                            Forget Password
                        </ThemedText>
                    </TouchableOpacity>

                    <Spacer height={30} />

                    <ThemedButton
                        style={styles.button}
                        onPress={() => router.replace('/home')}
                    >
                        <ThemedButtonText style={styles.buttonText}>
                            Login
                        </ThemedButtonText>
                    </ThemedButton>

                    <Spacer height={10} />
                    
                    <TouchableOpacity onPress={() => router.push('/signup')}>
                        <ThemedText style={styles.linkText}>
                            Don’t have an account? Sign up
                        </ThemedText>
                    </TouchableOpacity>

                    <Spacer height={30} />

                    <ThemedView style={styles.auxillary}>
                        <ThemedView style={styles.left} bg="line" />
                        <ThemedText style={styles.auxillaryText}>Or</ThemedText>
                        <ThemedView style={styles.right} bg="line" />
                    </ThemedView>

                    <Spacer height={40} />

                    <ThemedView style={styles.sso}>
                        <View style={styles.iconWrapper}>
                            <Image source={Google} style={styles.icon} />
                        </View>
                        <View style={styles.iconWrapper}>
                            <Image source={logo} style={styles.icon} />
                        </View>
                        <View style={styles.iconWrapper}>
                            <Image source={Email} style={styles.icon} />
                        </View>
                    </ThemedView>
                </ThemedView>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 32,
        fontFamily: 'Geist-Bold',
        textAlign: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    input: {
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 7,
        marginVertical: 5,
        fontFamily: 'Geist-Regular',
        fontSize: 16,
    },
    forgotText: {
        marginLeft: 'auto',
        fontFamily: 'Geist-Regular',
    },
    button: {
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Geist-Regular',
        fontSize: 16,
    },
    linkText: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Geist-Regular',
    },
    auxillary: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    left: {
        flex: 1,
        height: 1,
        marginRight: 10,
    },
    right: {
        flex: 1,
        height: 1,
        marginLeft: 10,
    },
    auxillaryText: {
        fontFamily: 'Geist-Regular',
        fontSize: 16,
    },
    sso: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 60,
        marginHorizontal: 20,
    },
    iconWrapper: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    icon: {
        width: 25,
        height: 25,
    }
});
