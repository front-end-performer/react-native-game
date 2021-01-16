import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addEnteredGoal = (goalTitle) => {
    
     if(goalTitle.length === 0) return;

    setCourseGoal((curentGoals) => [
      ...curentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoal((curentGoals) => {
      return curentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  
  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addEnteredGoal} onCancel={cancelGoalHandler} />
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoal}
          renderItem={(itemData) => (
            <GoalItem
              onDelete={removeGoalHandler}
              title={itemData.item.value}
              id={itemData.item.id}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
