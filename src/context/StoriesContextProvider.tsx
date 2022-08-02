import { ReactNode, useState } from "react";
import Story from "../models/Store";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      author: "Simon",
      word1: "Michigan",
      word2: "Matt",
      word3: "indubitably",
      word4: "janitor",
      word5: "9",
      word6: "families first",
    },
    {
      id: 2,
      author: "Mitch",
      word1: "Michigan",
      word2: "Bob",
      word3: "kerfuffle",
      word4: "chef",
      word5: "100",
      word6: "mmm toasty",
    },
  ]);
  const addStory = (story: Story): void => {
    setStories((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
