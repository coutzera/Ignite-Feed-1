import { PencilLine } from "phosphor-react";
import styles from "./style.module.css";
import { Avatar } from "../Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Foto de capa do perfil de usuário"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/coutzera.png" />
        <strong>Hudson Coutinho</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
