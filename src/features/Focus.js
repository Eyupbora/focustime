import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export default function Focus({ addSubject }) {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputCustomStyle}
          label="What would you like to focus on?"
          onChangeText={setSubject}
          // right={<TextInput.Icon icon="eye" />} TextInput içerisinde sağ tarafa iconu yerleştirir
          // secureTextEntry Girilen text nokta olarak görünür. Kullanıcı girişlerinde password girişi için uygundur.
        />
        <RoundedButton
          size={50}
          title="+"
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    // utils klasörü içinde sizes diye dosya oluşturup isimlere karşılık ölçüler verip genel kullanım yapıyoruz.
    padding: spacing.md,
    flexDirection: "row",
    gap: spacing.lg,
  },
  inputCustomStyle: {
    flex: 1,
  },
  customBtnStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
