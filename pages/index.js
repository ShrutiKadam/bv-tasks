import Head from "next/head";
import { useState } from "react";
import {
  Navbar,
  Footer,
  LetsBuildFuture,
  ManagingPrototype,
  ShowCaseYourApp,
  ExperienceFreedom,
  TodoList,
} from "../components";

export default function Home() {
  const [showTodo, setShowTodo] = useState(false);
  return (
    <>
      <header>
        <Head>
          <title>Binaryveda Task - Marvel</title>
          <meta name="description" content="Generated by create next app" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Sections of the page devided -- can be optimized with next layout feature */}
       
      </header>
      <main className="container position-relative">
      <Navbar />
        <LetsBuildFuture />
        <ExperienceFreedom />
        <ShowCaseYourApp />
        <ManagingPrototype />
        <Footer />

        {/* floating button */}
        <div>
          <button
            onClick={() => setShowTodo(!showTodo)}
            className="d-flex align-items-center justify-content-center fixed-bottom btn btn-primary btn-circle btn-lg m-3"
            style={{ zIndex: 1, width: 80, height: 80, borderRadius: "50%" }}
          >
            {!showTodo ? "Add Todo" : "Close Todo"}
          </button>
          <div className="fixed-bottom ms-4" style={{ marginBottom: 100 }}>
            {showTodo ? <TodoList /> : null}
          </div>
        </div>
      </main>
    </>
  );
}
