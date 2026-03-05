import { View } from "react-native"
import { Button, Paragraph } from "../components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/StackNavigator"

type Props = NativeStackScreenProps<RootStackParamList, "QuestionScreen">;

export const QuestionScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Paragraph text="Hello World" />
      <Paragraph text="Hello World" />
      <Paragraph text="Hello World" />
      <Paragraph text="Hello World" />

      <Button text="Résultats" onPress={async() => navigation.navigate("ResultScreen")} />
    </View>
  )
}