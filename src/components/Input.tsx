import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export const Input = ({ value, onChangeText, placeholder, textContentType: type }: TextInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="gray"
      keyboardType={type === 'emailAddress' ? 'email-address' : 'default'}
      autoCapitalize={type === 'emailAddress' ? 'none' : undefined}
      secureTextEntry={type === 'password'}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
    marginTop: 20,
    paddingHorizontal: 16,
    width: '100%',
  },
})
