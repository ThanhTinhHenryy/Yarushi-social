import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function SSOCallback() {
  const router = useRouter();

  useEffect(() => {
    // Sau khi Clerk xử lý xong, app sẽ vào đây, rồi mình tự điều hướng tiếp
    router.replace("/(tabs)");
  }, []);

  return null; // Không cần UI gì cả, chỉ để làm nơi redirect
}
