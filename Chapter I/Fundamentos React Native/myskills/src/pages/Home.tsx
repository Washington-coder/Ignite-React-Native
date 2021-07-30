import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

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
  // Utilizando estados
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");
  // Utilizando estados

  //Funções sempre antes do return
  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills([...mySkills, data]);
  }
  //Funções sempre antes do return

  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log(currentHour);

    if (currentHour < 12) {
      setGreeting("Good mornig");
    } else if (currentHour >= 12 && currentHour <= 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evevinig");
    }
  }, [mySkills]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Rodrigo</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
        onPress={handleAddNewSkill}
        title="Add"
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name} />}
      />
    </View>
  );
}

// 2. Utilizando o stylesheet de forma separado

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
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
  greetings: {
    color: "#fff",
  },
});
