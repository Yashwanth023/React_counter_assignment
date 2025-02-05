import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Bold, Italic, Underline, List } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setContent(savedContent);
      console.log('Loaded editor content from localStorage');
    }
  }, []);

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
    console.log('Applied formatting:', command);
  };

  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerHTML;
    setContent(newContent);
    localStorage.setItem('editorContent', newContent);
    console.log('Editor content updated');
  };

  const handleSave = () => {
    localStorage.setItem('editorContent', content);
    toast({
      title: "Saved!",
      description: "Your content has been saved successfully.",
    });
    console.log('Editor content saved to localStorage');
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Rich Text Editor</h2>
      
      <div className="flex gap-2 mb-4 border-b pb-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleFormat('bold')}
          className="w-8 h-8"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleFormat('italic')}
          className="w-8 h-8"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleFormat('underline')}
          className="w-8 h-8"
        >
          <Underline className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleFormat('insertUnorderedList')}
          className="w-8 h-8"
        >
          <List className="h-4 w-4" />
        </Button>
      </div>

      <div
        className="min-h-[200px] border rounded-lg p-4 mb-4 focus:outline-none"
        contentEditable
        onInput={handleChange}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <Button onClick={handleSave} className="w-full">
        Save Content
      </Button>
    </div>
  );
};

export default RichTextEditor;