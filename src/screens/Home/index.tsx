import { useState } from 'react'
import { Alert, FlatList, Image, ScrollView, SectionList, Text, TextInput, TouchableOpacity, View } from "react-native";

import logo from '../../../assets/logo.png'
import plus from '../../../assets/plus.png'

import { TaskCard } from '../../components/TaskCard'
import { NoTasks } from '../../components/NoTasks';

import { colors } from '../../colors'
import { styles } from './styles'

type TaskProps = {
  done: boolean,
  description: string,
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [description, setDescription] = useState('')

  const completedTasks = tasks.filter(task => task.done);
  const totalTasks = tasks.length;

  function handleToggleTask(description: string) {
    setTasks(prevState => {
      return prevState.map(task => {
        if (task.description === description) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  }

  function handleAddTask() {
    if (tasks.find(task => task.description === description)) {
      return Alert.alert('Task já existe', 'Já existe uma task na lista com essa descrição.');
    }

    setTasks(prevState => [{
      done: false,
      description
    }, ...prevState])

    setDescription('')
  }

  function handleRemoveTask(description: string) {
    setTasks(prevState => (
      prevState.filter(task => task.description !== description))
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      
      <View style={styles.taskList}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={ colors.gray300 }
            maxLength={ 100 }
            value={ description }
            onChangeText={ setDescription }
          />
          <TouchableOpacity
            style={styles.addTaskButton}
            onPress={handleAddTask}
          >
            <Image source={plus} />
          </TouchableOpacity>
        </View>
        <View style={styles.listHeader}>
          <View style={styles.headerItem}>
            <Text style={styles.createdTasksText}>
              Criadas
            </Text>
            <Text style={styles.countLabel}>
              { totalTasks }
            </Text>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.tasksDoneText}>
              Concluídas
            </Text>
            <Text style={styles.countLabel}>
              { completedTasks.length }
            </Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={task => task.description}
          renderItem={task => (
            <TaskCard
              done={task.item.done}
              description={task.item.description}
              onRemove={() => handleRemoveTask(task.item.description)}
              onToggleTask={() => handleToggleTask(task.item.description)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <NoTasks />
          )}
        />
      </View>
    </View>
  );
}