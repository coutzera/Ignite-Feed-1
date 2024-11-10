import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import "./styles/global.css";
import styles from "./styles/style.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/coutzera.png",
      name: "Hudson Coutinho",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto novo no meu portifa. É um projeto desenvolvido na semana do NLW Return.",
      },
      { type: "link", content: "http://github.com/coutzera" },
    ],
    publishedAt: new Date("2024-11-09 15:45:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "CFO @ rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala Devs" },
      {
        type: "paragraph",
        content:
          "Estou aqui para falar sobre o trabalho do meu grande amigo @coutzera",
      },
      { type: "link", content: "http://github.com/maykbrito" },
    ],
    publishedAt: new Date("2024-11-09 15:45:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
