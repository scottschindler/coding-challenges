import React, { useEffect } from "react";
import { useRouter } from "next/router";
import sdk from "@stackblitz/sdk";

export default function challenges() {
  let vm;
  async function goToProject() {
    let test = "testhfjbdjhbfgdjh";
    vm = await sdk.embedGithubProject(
      "embed",
      "scottschindler/coding-challenges",
      {
        height: 400,
        //   openFile: `userId/${test}.js`,
        openFile: "pages/index.tsx",
        //   openFile: angular.openFile,
      }
    );

    for (const button of document.querySelectorAll<HTMLButtonElement>(
      "button:disabled"
    )) {
      button.disabled = false;
    }

    if (!vm) {
      console.error("SDK vm is not available");
      return;
    }

    await vm.applyFsDiff({
      create: {
        "testing.html": `${test}`,
      },
      destroy: [],
    });
  }

  const router = useRouter();

  const getFiles = async () => {
    const files = await vm.getFsSnapshot();
    console.log(files);
  };
  const embedNewProjectWithFiles = async () => {
    const files = await vm.getFsSnapshot();
    sdk.embedProject(
      "embed2",
      {
        title: "Node Starter",
        description: "A basic Node.js project",
        template: "node",
        files: JSON.parse(files),
      },
      {
        clickToLoad: true,
        openFile: "index.js",
        terminalHeight: 50,
      }
    );
  };

  return (
    <div>
      <ul>
        <li onClick={goToProject}>React 1</li>
        <div id="embed"></div>
        <div id="embed2"></div>

        <li>React 1</li>
        <li>React 1</li>
        <li>React 1</li>
      </ul>

      <button onClick={getFiles}>Check</button>
      <button onClick={embedNewProjectWithFiles}>Check again</button>
    </div>
  );
}
