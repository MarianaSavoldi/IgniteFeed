import {Post} from "./Post";
import { Header } from "./components/Header";
import './global.css'

export function App() {

  return (
    <>
      <Header/>
      <Post author='Me' content='This is my post'/>
      <Post author='Another person' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'/>
    </>

  )
}
