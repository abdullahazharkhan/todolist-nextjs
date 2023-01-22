"use client";
import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  TabList,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Task({ task, index, completeTask, removeTask }: any) {
  const toast = useToast();

  return (
    <Box
      m={8}
      border="1px"
      borderColor={"blue.700"}
      borderRadius={5}
      h={50}
      display="flex"
      alignItems={"center"}
      pl={6}
      justifyContent={"space-between"}
    >
      <Box
        style={{ textDecoration: task.completed ? "line-through" : "" }}
        color={task.completed ? "green.500" : "red.600"}
      >
        <Text fontSize="xl" fontWeight={"semibold"}>
          {task.title}
        </Text>
      </Box>
      <Box>
        <Button
          m={{ base: "-8", md: "1", lg: "2" }}
          mr={{ base: "0", md: "1", lg: "2" }}
          variant="ghost"
          onClick={() => {
            removeTask(index);
            toast({
              title: `Successfully Deleted`,
              status: "error",
              isClosable: true,
            });
          }}
          colorScheme="red"
        >
          Delete ❌
        </Button>
        <Button
          variant={"ghost"}
          m={2}
          onClick={() => {
            completeTask(index);
            toast({
              title: `Task Completed`,
              status: "success",
              isClosable: true,
            });
          }}
        >
          {task.completed ? "Did ✔" : "Done ❓"}
        </Button>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------

function CreateTask({ addTask }: any) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} p={8}>
        <Input
          type="text"
          h={10}
          value={value}
          placeholder="Add a new task"
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </form>
  );
}

// ---------------TODO-----------------------
function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title: any) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index: any) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index: any) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Box m={10}>
      <div>
        <CreateTask addTask={addTask} />
      </div>
      <Box>
        <Heading ml={7} size={"lg"}>
          ⏲{" "}
          {tasksRemaining === 1
            ? "1 Task Left"
            : tasksRemaining + " Tasks Left"}{" "}
        </Heading>
      </Box>
      <div>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
    </Box>
  );
}
export default Todo;
