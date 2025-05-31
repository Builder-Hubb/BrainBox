import { StyleSheet, TouchableOpacity, Image, View, useColorScheme } from 'react-native'
import { useFonts } from 'expo-font';
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import ThemedButton from '../components/ThemedButton';
import ThemedButtonText from '../components/ThemedButtonText';
import Google from '../assets/img/google-icon.png'
import Email from '../assets/img/mail-icon.png'
import LightLogo from "../assets/img/apple-light.png"
import DarkLogo from "../assets/img/apple-dark.png"
import { useRouter } from 'expo-router';


const home = () => {
  const colorScheme = useColorScheme()
  const router = useRouter();

  const logo = colorScheme === 'light' ? LightLogo : DarkLogo

  const [fontsLoaded] = useFonts({
    'Geist-Regular': require('../assets/Fonts/static/Geist-Regular.ttf'),
    'Geist-Bold': require('../assets/Fonts/static/Geist-Bold.ttf')
  });

  if (!fontsLoaded) return null;


  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={50} />
      <ThemedText style={styles.title} title={true}>Welcome!</ThemedText>
      <Spacer height={30} />
      <ThemedView style={styles.buttonWrapper}>

        <TouchableOpacity style={[styles.button, { backgroundColor: colorScheme === 'dark' ? '#232627' : '#000000' }]} onPress={() => router.push('/login')}>
          <ThemedText style={[styles.text, { color: '#fff' }]}>Log In</ThemedText>
        </TouchableOpacity>

        <Spacer height={20} />

        <TouchableOpacity style={[styles.button, { backgroundColor: colorScheme === 'dark' ? '#232627' : '#E3E3E3' }]} onPress={() => router.push('/signup')}>
          <ThemedText style={[styles.text, { color: colorScheme === 'dark' ? '#fff' : '#00000'}]}>
            Sign Up
          </ThemedText>
        </TouchableOpacity>

      </ThemedView>

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
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Geist-Bold',
    textAlign: 'center',
    lineHeight: 34,
  },
  buttonWrapper: {
    width: '85%'
  },
  button: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Geist-Regular',
    fontSize: 14,
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
})