import { Image, Text, TouchableOpacity, View } from "react-native";

import trash from '../../../assets/trash.png'
import check from '../../../assets/check.png'

import { styles } from './styles'

type TaskCardProps = {
  done: boolean,
  description: string,
  onRemove: () => void,
  onToggleTask: () => void
}

export function TaskCard({ done, description, onRemove, onToggleTask}: TaskCardProps) {

  const cardTextStyle = (done
    ? [styles.taskDescription, styles.taskDescriptionDone]
    : [styles.taskDescription]
  )

  return (
    <View style={styles.taskCard}>
      <TouchableOpacity
        onPress={onToggleTask}
      >
        { done
          ? <Image source={check} />
          : <View style={styles.checkBox}></View>
        }
      </TouchableOpacity>

      <Text style={cardTextStyle}>{ description }</Text>
      
      <TouchableOpacity onPress={ onRemove }>
        <Image source={trash} />
      </TouchableOpacity>
    </View>
  )
}