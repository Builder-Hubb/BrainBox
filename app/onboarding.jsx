import React, { useState, useRef } from 'react';
import Image1 from "../assets/img/Robot Image.png"
import Image2 from "../assets/img/Robot Img.png"
import Image3 from "../assets/img/Robo Image.png"
import {
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
} from 'react-native';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import { useFonts } from 'expo-font';
import ThemedButtonText from '../components/ThemedButtonText';
import ThemedButton from '../components/ThemedButton';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef(null);
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'Geist-Regular': require('../assets/Fonts/Geist-Regular.ttf'),
        'Geist-Bold': require('../assets/Fonts/static/Geist-Bold.ttf')
    });

    if (!fontsLoaded) return null;

    const onboardingData = [
        {
            id: 1,
            title: 'Boost Your Mind\nPower with AI',
            subtitle: 'Chat with the smartest AI Future\nExperience power of AI with us',
            image: Image1,
        },
        {
            id: 2,
            title: 'Chat With Your\nFavourite AI',
            subtitle: 'Chat with the smartest AI Future\nExperience power of AI with us',
            image: Image2,
        },
        {
            id: 3,
            title: 'Unlock the Power\nof Future AI',
            subtitle: 'Chat with the smartest AI Future\nExperience power of AI with us',
            image: Image3,
        },
    ];

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setCurrentIndex(index);
    };

    const goToNext = () => {
        if (currentIndex < onboardingData.length - 1) {
            const nextIndex = currentIndex + 1;
            scrollViewRef.current?.scrollTo({
                x: nextIndex * width,
                animated: false,
            });
            setCurrentIndex(nextIndex);
        }
    };

    const skipOnboarding = () => {
        router.replace('/welcome'); // Go to home page
    };

    const renderDots = () => {
        return (
            <View style={styles.dotsContainer}>
                {onboardingData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dotOuter,
                            {
                                borderColor: index === currentIndex ? '#333' : 'transparent',
                            },
                        ]}
                    >
                        <View
                            style={[
                                styles.dot,
                                {
                                    backgroundColor: index === currentIndex ? '#333' : '#ccc',
                                },
                            ]}
                        />
                    </View>
                ))}
            </View>
        );
    };

    return (
        <ThemedView>
            <Spacer height={40} />

            {/* Skip Button */}
            <ThemedText style={styles.skip} onPress={skipOnboarding}>Skip</ThemedText>

            <Spacer height={10} />

            {/* Scrollable Content */}
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {onboardingData.map((item) => (
                    <ThemedView key={item.id}>
                        <Image source={item.image} style={styles.image} />

                        <ThemedView style={styles.container}>
                            <ThemedText style={styles.title} title={true}>{item.title}</ThemedText>
                            <Spacer height={15} />
                            <ThemedText style={styles.subtitle}>{item.subtitle}</ThemedText>
                            <Spacer height={30} />
                        </ThemedView>
                    </ThemedView>
                ))}
            </ScrollView>

            {/* Dots Indicator */}
            {renderDots()}

            <Spacer height={30} />


            {/* Navigation Buttons */}
            <ThemedView style={styles.navigationContainer}>
                <ThemedButton
                    style={styles.nextButton}
                    onPress={() => {
                        if (currentIndex === onboardingData.length - 1) {
                            router.replace('/welcome'); // Navigate on last screen
                        } else {
                            goToNext(); // Go to next onboarding slide
                        }
                    }}
                >
                    <ThemedButtonText style={styles.nextButtonText}>
                        {currentIndex === onboardingData.length - 1 ? 'Continue' : 'Next'}
                    </ThemedButtonText>
                </ThemedButton>
            </ThemedView>

        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    skip: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        marginRight: 30,
        fontFamily: 'Geist-Regular',
        fontSize: 14
    },
    image: {
        width: width * 1,
        height: height * 0.6,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Geist-Bold',
        textAlign: 'center',
        lineHeight: 34,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Geist-Regular',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotOuter: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    navigationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
    },
    nextButton: {
        height: 50,
        width: '80%',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    nextButtonText: {
        fontSize: 18,
        fontFamily: 'Geist-Regular',
    },

});

export default OnboardingScreen;