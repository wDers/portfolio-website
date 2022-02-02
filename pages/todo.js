import { motion } from "framer-motion";
import { Project } from "../components";

function Todo({ variants }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Project
        title="Todo Applikáció"
        description="A felhasználónak lehetősége van listába szedni napi teendőit, bepipálni azt amivel végzett, szerkeszteni vagy akár végleg törölni. Minden adatot local storage-ba ment tehát az oldal újra töltése után is megmaradnak a tennivalók."
        stack="React, TailwindCSS"
        link="https://todo-app-wders.vercel.app"
        source="https://github.com/wDers/todo-app"
        src="/todo_project.webp"
        alt="Kép a todo projectemről."
      />
    </motion.div>
  );
}

export default Todo;
