import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

// NOTES

// 1. Retorne apenas 1 elemento no return
//  -> Pode ser Fragment ("<></>")
//  -> Ou uma View que engloba tudo

//# Componentes reactnative
//  TextInput:
//  -> Area para digitar textos
//  Platform:
//  -> Especificar alteracao nas plataformas ios ou android
//  -> Usado em estilizacoes

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Rodrigo</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>
    </View>
  );
}

// 2. Utilizando o stylesheet de forma separado

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: "#121015",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    fontSize: 18,
    // Utilizando o Platform para consertar o padding no IOS
    padding: Platform.OS === "ios" ? 15 : 10,
    // Utilizando o Platform para consertar o padding no IOS
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
  },
});
