import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MarianaSavoldi.png',
      name: 'Mari Savoldi',
      role: 'Front-End Web Developer'
    },
    postContent: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2024-01-24 20:14:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    postContent: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2024-01-28 20:14:00')
  }
];

export function App() {
  return (
    <>
      <Header />

      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
                key={ post.id }
                post={ post }
              />
            );
          }) }
        </main>
      </div>
    </>

  );
}
