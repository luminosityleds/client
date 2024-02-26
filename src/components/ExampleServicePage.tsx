import example from "../microservices/example.service"
import IExampleData from "../ts/IExampleData";
import { create } from 'zustand'


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
  set: () => void
}
const usePlaceholderStore = create<PlaceholderState>((set) => ({
  todos: 0,
  set: () => {todo: example.getAll(); console.log(example.getAll())}
}));

const ToDos = () => {
  const { count, increment, decrement } = useCounterStore();
  const { todos, set } = usePlaceholderStore();

  return (
    <div>
      <button onClick={set}>Get Todos</button>
      <h1>TODOS</h1>
    </div>
  );
};

export const ExampleServicePage = () => {

    return (
        <>
        <ToDos/>
        </>
    )

}