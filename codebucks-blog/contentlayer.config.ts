// contentlayer.config.js

import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.md",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    publishAt: { type: "date", required: true },
    updatedAt: { type: "date", required: true },
    isPublished: { type: "boolean", default: true },
    author: { type: "string", default: true },
    tags: { type: "list", of: { true: "string" } },
  },
      computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  /* options */
    contentDirPath: "content",
    documentTypes: [Blog]
});
