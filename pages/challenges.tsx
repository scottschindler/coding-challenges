import React, { useEffect } from "react";
import { useRouter } from "next/router";
import sdk from "@stackblitz/sdk";

export default function challenges() {
  let originalProject;
  let newProject;

  async function goToProject() {
    let test = "testhfjbdjhbfgdjh";
    // originalProject = await sdk.embedGithubProject(
    //   "embed",
    //   "scottschindler/coding-challenges",
    //   {
    //     height: 400,
    //     //   openFile: `userId/${test}.js`,
    //     openFile: "pages/index.tsx",
    //     //   openFile: angular.openFile,
    //   }
    // );

    sdk.openGithubProject("scottschindler/coding-challenges", {
      newWindow: true,
    });

    // sdk.openProjectId("nextjs-7kdwma", {
    //   newWindow: true,
    //   view: "editor",
    // });

    // await originalProject.applyFsDiff({
    //   create: {
    //     "testing.js": test,
    //   },
    //   destroy: [Object.keys(originalProject).flat()],
    // });
    // const files = await originalProject.getFsSnapshot();
    // console.log(files);
  }

  const router = useRouter();

  // const getFiles = async () => {
  //   const files = await vm.getFsSnapshot();
  //   console.log(files);
  // };

  const embedNewProjectWithFiles = async () => {
    const files = await originalProject.getFsSnapshot();
    console.log(files);
    newProject = await sdk.embedProjectId("embed2", "node-s1witt", {
      forceEmbedLayout: true,
    });

    await newProject.applyFsDiff({
      create: files,
      destroy: [],
    });

    // sdk.embedProject(
    //   "embed2",
    //   {
    //     title: "Node Starter",
    //     description: "A basic Node.js project",
    //     template: "node",
    //     files: { files },
    //   },
    //   {
    //     clickToLoad: true,
    //     openFile: "index.js",
    //     terminalHeight: 50,
    //   }
    // );
  };

  const getURL = async () => {
    const url = await vm.preview.getUrl();
    console.log(url);
  };

  return (
    <div className="flex flex-col">
      <ul>
        <li onClick={goToProject}>React 1</li>
        <div id="embed"></div>
        <div id="embed2"></div>

        <li>React 1</li>
        <li>React 1</li>
        <li>React 1</li>
      </ul>

      {/* <button onClick={getFiles}>Check</button> */}
      <button onClick={embedNewProjectWithFiles}>
        embedNewProjectWithFiles
      </button>
      <button onClick={getURL}>get URL</button>
      <iframe
        src="https://codesandbox.io/embed/currying-sky-1pjgpd?fontsize=14&hidenavigation=1&theme=dark"
        // style={{width:"100%", height:"500px", border:0, border-radius: "4px", overflow:"hidden"}}
        style={{ width: "100%", height: "500px", border: 0 }}
        title="currying-sky-1pjgpd"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}
