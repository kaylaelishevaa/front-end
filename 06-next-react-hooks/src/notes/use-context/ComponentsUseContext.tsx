import { createContext, useContext } from "react";

const ChildrenNameContext = createContext("");

export default function ComponentsUseContext() {
  const childrenName = "Angelina";

  return (
    <>
      <ChildrenNameContext.Provider value={childrenName}>
        <h2>Super Grandparent</h2>
        <p>Hello, {childrenName}</p>
        <Grandparent />
      </ChildrenNameContext.Provider>
    </> );

  function Grandparent() {
    return (
      <>
        <h2>Grandparent </h2>
        <Parent />
      </>
    );
  }

  function Parent() {
    return (
      <>
        <h2>Parent </h2>
        <Children />
      </>
    );
  }

  function Children() {
    const childrenName = useContext(ChildrenNameContext);
    return (
      <>
        <h2>Parent </h2>
        <p>My name is {childrenName}</p>
      </>
    );
  }
}

sudo chown -R $(whoami) "/Users/kayla3lisheva/front end/10-mini-blog/.next"
