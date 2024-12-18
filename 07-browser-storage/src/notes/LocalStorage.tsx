import { useEffect, useState } from "react";

export default function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [text, setText] = useState("");

  function addNote(e: React.FormEvent) {
    e.preventDefault();
    setNotes((prev) => {
      const updatedNotes = [...prev, text];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });

    // setNotes((prev) => [...prev, text]);

    setText("");
  }

  function removeNote(removedIndex: number) {
    const latestNotes = notes.filter((_, index) => index !== removedIndex);
    setNotes(latestNotes);
    localStorage.setItem("notes", JSON.stringify(latestNotes));
  }

  function removeAll() {
    setNotes([]);
    localStorage.removeItem("notes");
  }

  useEffect(() => {
    const response = localStorage.getItem("notes");

    if (response) {
      const data = JSON.parse(response);
      setNotes(data);
    }
  }, []);

  return (
    <>
      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Input Your Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {notes.map((note, index) => (
          <li>
            <span>{note}</span>
            <button onClick={() => removeNote(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={removeAll}>Remove All</button>
    </>
  );
}
