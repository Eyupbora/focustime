import { StyleSheet, Text, View, Vibration } from "react-native";
import React, { useState } from "react";
import { useKeepAwake } from "expo-keep-awake";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import Timing from "./Timing";

// Telefon titremesi için gerekli veriler ve bu veriler Vibration.vibrate içeriinde çağrılır.
const ONE_SECOND_IN_MS = 2000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export default function Timer({ focusSubject, clearSubject, onTimerEnd }) {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setProgress(1);
    setIsStarted(false);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={(progress) => setProgress(progress)}
          onEnd={onEnd}
          minutes={minutes}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          style={styles.progressbarStyle}
          progress={progress}
          color={MD3Colors.error50}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.btnWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.btnWrapper}>
        <RoundedButton title="-" size={50} onPress={clearSubject} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  btnWrapper: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: spacing.lg,
  },
  textWrapper: {
    paddingTop: spacing.lg,
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.lg,
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSizes.md,
  },
  progressContainer: {
    marginHorizontal: spacing.lg,
  },
  progressbarStyle: {
    height: 10,
    borderRadius: 5,
  },
});
