import { useEffect, useState } from "react";

export default function SessionStorage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    const savedName = sessionStorage.getItem("name");
    const savedAddress = sessionStorage.getItem("address");
    const savedGender = sessionStorage.getItem("gender");

    if (savedName) setName(savedName);
    if (savedAddress) setAddress(savedAddress);
    if (savedGender) setGender(savedGender);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("gender", gender);
  }, [name, address, gender]);

  return (
    <>
      <h1>Hello, Guest!</h1>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Input your name here"
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Input your address here"
        />
        <div>
          <input
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            name="gender"
            id="male"
          />
          <label htmlFor="male">Male</label>
          <input
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            name="gender"
            id="female"
          />
          <label htmlFor="female">Female</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
