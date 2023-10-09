export const data = [
  {
    type: "folder",
    name: "public",
    children: [
      {
        type: "folder",
        name: "assets",
        children: [
          { type: "file", name: "images" },
          { type: "file", name: "animation" }
        ]
      }
    ]
  },
  {
    type: "folder",
    name: "src",
    children: [
      {
        type: "folder",
        name: "component",
        children: [
          { type: "file", name: "something" },
          { type: "file", name: "something" },
          { type: "file", name: "something" }
        ]
      },
      {
        type: "folder",
        name: "container",
        children: [
          { type: "file", name: "something" },
          { type: "file", name: "something" }
        ]
      },
      {
        type: "folder",
        name: "hooks",
        children: [{ type: "file", name: "something" }]
      },
      {
        type: "folder",
        name: "helper",
        children: [{ type: "file", name: "something" }]
      },
      {
        type: "folder",
        name: "store",
        children: [{ type: "file", name: "something" }]
      }
    ]
  },
  { type: "file", name: "photo.jpg" }
];
