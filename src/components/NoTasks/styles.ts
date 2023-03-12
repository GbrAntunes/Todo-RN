import { StyleSheet } from "react-native"

import { colors } from '../../colors'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    width: '100%',
    borderTopWidth: 1,
    borderColor: colors.gray400,
    alignItems: 'center',
  },
  message: {
    marginTop: 16,
    color: '#333',
  },
  bolder: {
    fontWeight: 'bold',
    color: colors.gray300,
  },
  simpleText: {
    color: colors.gray300,
  }
})