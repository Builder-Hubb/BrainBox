import { useColorScheme, Image } from 'react-native'
import LightLogo from "../assets/img/Light-logo.png"
import DarkLogo from "../assets/img/Dark-logo.png"

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'light' ? DarkLogo : LightLogo

    return (
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo