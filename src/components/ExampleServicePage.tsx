import { useState } from "react";
import example from "../microservices/example.service";
import { getAll } from "../microservices/example.service";
import IExampleData from "../ts/IExampleData";
import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

interface Todo { 
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface ToDoState {
  todos: Todo[];
  setOne: (id: number) => void;
  setAll: () => void;
}

interface PlaceholderState {
  todos: any;
  set: () => void;
}
const usePlaceholderStore = create<PlaceholderState>((set) => ({
  todos: 0,
  set: () => {
    todo: example.getAll();
    console.log(example.getAll());
  },
}));

const ToDos = () => {
  const { count, increment, decrement } = useCounterStore();
  const { todos, set } = usePlaceholderStore();

  // Vanilla React State Management
  const [todo, setTodo] = useState<any>([]);
  const [toggle, setToggle] = useState<boolean>(false);

  const resolveTodoListPromise = () => {
    if (toggle) 
    {
      // Resolve promise
      getAll().then((value: any) => {
        setTodo([{id: "1", title: "test"}]);
      });
      // Set toggle to inverse
      setToggle(!toggle);
    }
    else
    {
      // Resolve promise
      getAll().then((value: any) => {
        setTodo(value);
      });
      // Set toggle to inverse
      setToggle(!toggle);
    }
  };

  return (
    <div>
      <button onClick={resolveTodoListPromise}>Get Todos</button>
      {todo.map((todo: any) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export const ExampleServicePage = () => {
  return (
    <>
      <ToDos />
    </>
  );
};
