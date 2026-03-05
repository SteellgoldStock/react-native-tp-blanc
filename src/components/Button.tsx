import { ImageStyle, StyleSheet, StyleSheetProperties, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

type ButtonProps = {
  text: string;
  onPress: () => {};
  variant?: "default" | "secondary" | "selected";
}

const getVariant = (type: ButtonProps["variant"]) => {
  if (type == "default") {
    return {
      backgroundColor: 'purple',
      borderColor: 'purple'
    }
  } else if (type == "secondary") {
    return {
      borderColor: 'lightgray'
    }
  } else if (type == "selected") {
    return {
      backgroundColor: "#80008030",
      borderColor: '#d3d3d330'
    }
  }

  
}

export const Button = ({ text, onPress, variant = "default" }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, getVariant(variant)]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, getVariant(variant)]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 1,
    boxShadow: '0 1px 2px rgba(0,0,0, 0.05)',
    marginTop: 25,
    padding: 10,
    width: '100%'
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  buttonTextPrimary: {
    color: 'white'
  },
  buttonTextSecondary: {
    color: 'purple'
  }
})
