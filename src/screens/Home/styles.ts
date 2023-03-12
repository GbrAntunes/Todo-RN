import { StyleSheet } from "react-native"

import { colors } from '../../colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    lineHeight: '140%',
    fontSize: 16,
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    backgroundColor: colors.gray700,
    padding: 70,
  },
  form: {
    flexDirection: 'row',
    height: 54,
    width: '100%',
    paddingHorizontal: 24,
    position: 'absolute',
    top: -27,
  },
  input: {
    flex: 1,
    backgroundColor: colors.gray500,
    borderColor: colors.gray700,
    borderRadius: 6,
    padding: 16,
    color: colors.gray100,
  },
  addTaskButton: {
    padding: 18,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    marginLeft: 4,
  },
  taskList: {
    paddingTop: 55,
    marginLeft: 24,
    marginRight: 24,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdTasksText: {
    fontWeight: 'bold',
    color: colors.blue,
  },
  countLabel: {
    marginLeft: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.gray400,
    borderRadius: 16,
    color: colors.gray200,
    fontWeight: 'bold',
  },
  tasksDoneText: {
    fontWeight: 'bold',
    color: colors.purple,
  },
})