import React, { useEffect } from "react";
import { useRouter } from "next/router";
import sdk from "@stackblitz/sdk";

export default function challenges() {
  useEffect(() => {
    sdk.openProjectId(`${process.env.PROJECT_ID}`, {
      newWindow: false,
      openFile: "src/App.tsx",
      view: "preview",
    });
  }, []);

  const router = useRouter();

  const generateUniqueForkedStackBlitzLink = (id: string) => {
    console.log("yo");
  };

  return (
    <div style={{ height: "100%" }}>
      <ul>
        <li onClick={() => router.push("/challenges/1")}>React 1</li>
        <li>React 1</li>
        <li>React 1</li>
        <li>React 1</li>
      </ul>
    </div>
  );
}
