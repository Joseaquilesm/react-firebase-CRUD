import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const Write = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  // save function
  const saveData = async () => {
    const db = getDatabase(app);

    const newDocRef = push(ref(db, "nature/fruits"));

    set(newDocRef, {
      fruitName: inputValue1,
      fruitDesc: inputValue2,
    })
      .then(() => {
        alert("Data saved successfully");
      })
      .catch((error) => {
        console.error("Firebase write failed:", error);

        alert("error: " + error.message);
      });
  };

  return (
    <div>
      <Input
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
        placeholder="Input 1"
      ></Input>
      <Input
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
        placeholder="Input 2"
      ></Input>
      <Button onClick={saveData}> Save </Button>
    </div>
  );
};

export default Write;
