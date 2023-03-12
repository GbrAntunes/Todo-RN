import { Image, Text, View } from 'react-native';

import clipboard from '../../../assets/Clipboard.png'

import { styles } from './styles';

export function NoTasks() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />
      <View style={styles.message}>
        <Text style={styles.bolder}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.simpleText}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}
