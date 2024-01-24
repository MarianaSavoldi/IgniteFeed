import {Post} from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author='Me' content='This is my post'/>
          <Post author='Another person' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'/>
        </main>
      </div>
    </>

  )
}
