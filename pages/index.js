import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-12 flex flex-col justify-center items-center content-center h-[50vh]">
      <div>
        <h1 className="text-5xl font-bold text-center"> quickdoc.io </h1>
        <p className="text-3xl text-center"> Ephemeral document repositories. </p>
      </div>
    </div>
  );
};
