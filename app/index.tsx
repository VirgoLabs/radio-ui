import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Radio from "@/components/Radio";

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
          style={[
            styles.reactLogo,
            {
              tintColor: colors.text,
            },
          ]}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to UI Lab!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Component usage */}
      <Radio
        options={[
          { id: 1, label: "First", value: "first" },
          { id: 2, label: "Second", value: "second" },
          { id: 3, label: "Third", value: "third" },
        ]}
        onValueChange={(_, index) => { }}
      />

      <ThemedText type="title">Usecases of the Radio</ThemedText>
      <ThemedText type="small">
        Change Light/Dark theme to change radio by theme
      </ThemedText>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          Options &nbsp;
          <ThemedText type="light" style={{ color: "red" }}>
            required
          </ThemedText>
        </ThemedText>
        <ThemedText type="default">
          Object of id, label, value with optional icon, color, and disabled
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          onValueChange &nbsp;
          <ThemedText type="light" style={{ color: "red" }}>
            required
          </ThemedText>
        </ThemedText>
        <ThemedText type="default">
          (value: optionType, index: number) =&gt; void
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          onValueChange={(_, index) => { console.log(_, index) }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          defaultValueIndex &nbsp;
        </ThemedText>
        <ThemedText type="default">
          number
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          defaultValueIndex={1}
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          disabled &nbsp;
        </ThemedText>
        <ThemedText type="default">
          boolean
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          disabled
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          orientation &nbsp;
        </ThemedText>
        <ThemedText type="default">
          'horizontal' | 'vertical'
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          orientation="horizontal"
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          activeColor &nbsp;
        </ThemedText>
        <ThemedText type="default">
          string
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          activeColor="green"
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          inactiveColor &nbsp;
        </ThemedText>
        <ThemedText type="default">
          string
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          activeColor="green"
          inactiveColor="blue"
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          size &nbsp;
        </ThemedText>
        <ThemedText type="default">
          number
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          size={16}
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          error &nbsp;
        </ThemedText>
        <ThemedText type="default">
          string
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first" },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          orientation="horizontal"
          error="Must select this radio button"
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedText type="title">Options usage in Radio</ThemedText>
      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          icon &nbsp;
        </ThemedText>
        <ThemedText type="default">
          boolean
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first", icon: "flame-sharp" },
            { id: 2, label: "Second", value: "second", icon: "rocket-sharp" },
            { id: 3, label: "Third", value: "third", icon: "alert-sharp" },
          ]}
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          color &nbsp;
        </ThemedText>
        <ThemedText type="default">
          boolean
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first", icon: "flame-sharp", color: "red" },
            { id: 2, label: "Second", value: "second", icon: "rocket-sharp", color: "green" },
            { id: 3, label: "Third", value: "third", icon: "alert-sharp", color: "yellow" },
          ]}
          onValueChange={(_, index) => { }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          disabled &nbsp;
        </ThemedText>
        <ThemedText type="default">
          boolean
        </ThemedText>
        <Radio
          options={[
            { id: 1, label: "First", value: "first", disabled: true },
            { id: 2, label: "Second", value: "second" },
            { id: 3, label: "Third", value: "third" },
          ]}
          onValueChange={(_, index) => { }}
        />
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
