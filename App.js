import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, View, Text } from "react-native";
import { colors } from "./src/utils/colors";
import Focus from "./src/features/Focus";
import Timer from "./src/features/Timer";
import FocusHistory from "./src/features/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      console.log("sa")
      <StatusBar style="auto" />
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(false)}
        />
      )}
      {/* <Countdown/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /**SafeAreaView sadece ios 11 ve üstü cihazlarda statusbar
     * altında çalışmakta olup android cihazlarda çalışmamaktadır.
     * Bunun için padding vererek android cihazlarda statusbar
     * yüksekliği kadar padding verdik. **/
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
