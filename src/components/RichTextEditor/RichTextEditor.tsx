"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";

export default function RichTextEditor({
  updateContent,
  content,
}: {
  updateContent: (newContent: string) => void;
  content: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "unreset-css p-4 border-b border-r border-l border-black rounded-bl-md rounded-br-md outline-none max-h-96 overflow-auto",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      updateContent(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
