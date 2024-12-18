interface Prop {
  todos: string[];
  handleClick: () => void;
}

export default function Todos(prop: Prop) {
  return (
    <>
      <div>
        <h2>My Todos</h2>
        {prop.todos.map((todo: string, index: number) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={prop.handleClick}>Add Todo</button>
      </div>
    </>
  );
}
