import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

const Update = () => {
  type Fruit = {
    fruitId: string;
    fruitName: string;
    fruitDesc: string;
  };

  const [fruitArray, setSetFruitArray] = useState<Fruit[]>([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "/nature/fruits");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const tempArray = Object.keys(data).map((myFireId) => {
        return {
          ...data[myFireId],
          fruitId: myFireId,
        };
      });
      setSetFruitArray(tempArray);
    } else {
      alert("error");
    }
  };

  return (
    <div>
      <Button onClick={fetchData}> Load </Button>
      <ul>
        {fruitArray.map((item, index) => (
          <li key={index}>
            {item.fruitId} {item.fruitName} {item.fruitDesc}
            <Separator />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Update;
