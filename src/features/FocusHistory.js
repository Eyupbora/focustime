import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export default function FocusHistory({ history }) {
  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet</Text>;

  const renderItem = ({ item }) => (
    <Text style={styles.listItems}>- {item}</Text>
  );
  return (
    <View>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    padding: spacing.lg,
    fontSize: fontSizes.md,
  },
  listItems: {
    color: colors.white,
    paddingLeft: spacing.lg,
  },
});
