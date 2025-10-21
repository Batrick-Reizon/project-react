import React from "react"
import Navbar from "./component/Navbar"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Article from "./component/Article"
import Table from "./component/Table"
import Aside from "./component/Aside"
import Footer from "./component/Footer"

function App() {
  return (<>
    <Navbar></Navbar>
    <Header></Header>
    <Hero></Hero>
    <div className="flex flex-col sm:flex-row p-5">
      <main className="flex-1">
        <Article></Article>
        <Table></Table>
      </main>
      <Aside></Aside>
    </div>
    <Footer></Footer>
  </>)
}

export default App