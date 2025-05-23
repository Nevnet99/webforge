import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "doc",
      id: "read-me-first",
      label: "1. Read Me First",
    },
    {
      type: "doc",
      id: "planning",
      label: "2. Planning",
    },
    { type: "doc", id: "user-personas", label: "3. User Personas" },
    {
      type: "doc",
      id: "system-architecture",
      label: "4. System Architecture",
    },
    {
      type: "doc",
      id: "building-MVP-frontend",
      label: "5. Building the MVP Frontend",
    },
    {
      type: "doc",
      id: "starting-the-application",
      label: "6. Starting the application",
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
