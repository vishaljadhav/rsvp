import { Linking } from 'react-native'

export const openURL = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
    } else {
        Alert.alert(`Error opening url: ${url}`);
    }

}

export const lockToPortrait = () => {
    const initialOrent = Orientation.getInitialOrientation();

    if (initialOrent === 'PORTRAIT') {
        // do something
        Orientation.lockToPortrait();
    }
} 