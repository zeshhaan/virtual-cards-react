import Head from "next/head";
import Nav from "../components/Nav";
import Main from "../components/Main";

export default function Home() {
  return (
    <Nav>
      <div className="h-full w-full">
        <div className="flex items-center justify-center h-full w-full p-10">
          <h2 className="text-2xl">Nothing blocked or archived yet!</h2>
        </div>
      </div>
    </Nav>
  );
}
