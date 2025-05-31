import { StyleSheet, Animated } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';

export default function Splash() {
    const router = useRouter();
    const [stage, setStage] = useState(1);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const [fontsLoaded] = useFonts({
        'Geist-Regular': require('../assets/Fonts/static/Geist-Regular.ttf'),
        'Geist-Bold': require('../assets/Fonts/static/Geist-Bold.ttf'),
    });

    useEffect(() => {
        if (!fontsLoaded) return;

        const stageTimeout = setTimeout(() => {
            // Fade out stage 1
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setStage(2);
                // Fade in stage 2
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 3000); // first splash duration

        const navTimeout = setTimeout(() => {
            router.replace('/onboarding'); // final route
        }, 6000); // total time before navigation

        return () => {
            clearTimeout(stageTimeout);
            clearTimeout(navTimeout);
        };
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <ThemedView style={styles.container}>
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                {stage === 1 ? (
                    <>
                        <ThemedLogo style={styles.img} />
                        <ThemedText style={styles.title} title={true}>BrainBox</ThemedText>
                        <Spacer height={10} />
                        <ThemedText style={styles.subText}>Version 1.0</ThemedText>
                    </>
                ) : (
                    <>
                        <ThemedText style={styles.titleStage2} title={true}>BrainBox</ThemedText>
                        <ThemedText style={styles.subText}>Version 1.0</ThemedText>
                    </>
                )}
            </Animated.View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        position: 'absolute',
        bottom: 50,
        fontFamily: 'Geist-Bold',
        fontSize: 24
    },
    titleStage2: {
        fontFamily: 'Geist-Bold',
        fontSize: 34
    },
    subText: {
        position: 'absolute',
        bottom: 30,
        fontFamily: 'Geist-Regular',
        fontSize: 13
    },
    img: {
        width: 150,
        height: 150,
    },
});
