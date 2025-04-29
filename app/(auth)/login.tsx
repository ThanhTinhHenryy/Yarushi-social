import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/styles/auth.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import * as AuthSession from "expo-auth-session";

export default function login() {
  const redirectUrl = AuthSession.makeRedirectUri({
    scheme: "myapp",
    path: "sso-callback",
    preferLocalhost: false,
  });
  // * Login bằng google
  const { startSSOFlow } = useSSO(); // hook clerk
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
        redirectUrl,
      });
      console.log("🔁 Redirect URL:", redirectUrl);
      console.log(`SessionID: ${createdSessionId}`);
      console.log("Set Active Function:", setActive);

      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });

        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error("OAuth error:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Brand Section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>yarushi-app</Text>
        <Text style={styles.tagline}>
          Đừng bỏ lỡ điều thú vị xung quanh bạn
        </Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/auth-bg-1.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* User */}
      {/* <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.userButton}
          onPress={() => console.log("Hee")}
          activeOpacity={0.6}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="person" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Bằng user</Text>
        </TouchableOpacity>
      </View> */}

      {/* Login section */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Tiếp tục với Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          Bằng cách Tiếp Tục, Bạn đồng ý bla bla..
        </Text>
      </View>
    </View>
  );
}
