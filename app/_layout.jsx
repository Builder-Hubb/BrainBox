import { StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from "../Constants/Colors.js"
import { StatusBar } from 'expo-status-bar'


const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
                animation: 'fade'
            }}>
                <Stack.Screen name="splash" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding" options={{ title: 'onboarding', headerShown: false }} />
                <Stack.Screen name="welcome" options={{ title: 'Welcome', headerShown: false }} />
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})