"use client";

import { StyleSheet, View } from "react-native"
import { Button, HeaderTitle, Paragraph, ScreenWrapper } from "../components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/StackNavigator"
import { useQuestions } from "../hooks/useQuestion";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "QuestionScreen">;

export const QuestionScreen = ({ navigation }: Props) => {
  const { active, next } = useQuestions();
  const [selected, setSelected] = useState<number>();

  const questions = [active.reponse1, active.reponse2, active.reponse3, active.reponse4]

  return (
    <ScreenWrapper>
      <HeaderTitle text={active.question} />

      <View style={styles.list}>
        {questions.map((question, i) => {
          return (
            <Button
              text={question}
              onPress={async() => setSelected(i)}
              variant={i == selected ? "selected" : "secondary"}
            />
          )
        })}
      </View>

      <Button text="Valider" onPress={async() => console.log("Hey")} />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    width: 250,
    gap: 3
  }
});