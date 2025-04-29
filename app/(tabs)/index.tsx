import { Image, Text, View } from "react-native";
import { styles } from "../../styles/auth.style";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "red",
        }}
      >
        Home Screen
      </Text>
      <Link href={"/notification"}>Feeds screen in tabs</Link>
    </View>
  );
}
