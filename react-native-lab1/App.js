import { StatusBar } from "expo-status-bar";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";

export default function App() {
  const photos = [
    { id: 1, source: require("./assets/images/1.jpg") },
    { id: 2, source: require("./assets/images/2.jpg") },
    { id: 3, source: require("./assets/images/3.jpg") },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}> Lab 1 React Native</Text>
      <ScrollView horizontal>
        {photos.map((photo) => (
          <Image
            key={photo.id}
            source={photo.source}
            style={styles.photo}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  photo: {
    width: 420,
    marginRight: 10,
  },
  welcome: {
    color: "red",
    paddingBottom: 20,

    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});