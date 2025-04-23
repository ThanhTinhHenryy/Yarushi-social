import { Image, Text, View } from "react-native";
import { styles } from "../../styles/auth.style";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang Chủ</Text>
      <Link href={"/notification"}>Feeds screen in tabs</Link>
    </View>
  );
}
