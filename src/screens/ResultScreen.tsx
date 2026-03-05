import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, HeaderTitle, Input, ScreenWrapper } from '../components'
import { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, "ResultScreen">;

export const ResultScreen = ({ navigation }: Props) => {
  return (
    <ScreenWrapper>
      <HeaderTitle text="Résultats" />

      <Button
        text="Rejouer"
        onPress={async() => navigation.navigate("HomeScreen")}
      />
    </ScreenWrapper>
  )
}
