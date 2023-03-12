import { StyleSheet } from "react-native";

import { colors } from '../../colors'

export const styles = StyleSheet.create({
  taskCard: {
    padding: 12,
    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderColor: colors.gray400,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  checkBox: {
    height: 16,
    width: 16,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 8,
    marginRight: 8,
  },
  checkedBox: {
    height: 16,
    width: 16,
    borderColor: colors.purpleDark,
    backgroundColor: colors.purpleDark,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskDescription: {
    flex: 1,
    color: colors.gray100,
    maxWidth: 235,
  },
  taskDescriptionDone: {
    textDecorationLine: 'line-through',
    textDecorationColor: colors.gray300,
    color: colors.gray300,
  }
})