import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.tint,
        dark: Colors.dark.tint,
      }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-ui-lab-logo.png")}
          style={[styles.reactLogo, {
            tintColor: colors.text,
          }]}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to UI Lab!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Component usage */}
      {/* Simple Component View */}

      <ThemedText type="title">Usecases of the Button</ThemedText>
      <ThemedText type="small">
        Change Light/Dark theme to change button by theme
      </ThemedText>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          Props Name &nbsp;
          <ThemedText type="light" style={{ color: "red" }}>
            required
          </ThemedText>
        </ThemedText>
        <ThemedText type="default">Props type</ThemedText>
        {/* Components exmaples */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
