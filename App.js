// App.js
import React from 'react';
import AppNavigator from './src/components/navigation/AppNavigator';
import { TaskProvider } from './src/context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
};

export default App;
