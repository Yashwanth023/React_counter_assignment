import Counter from "@/components/Counter";
import UserForm from "@/components/UserForm";
import RichTextEditor from "@/components/RichTextEditor";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-12">React Project Dashboard</h1>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Counter Component</h2>
          <Counter />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">User Data Form</h2>
          <UserForm />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Rich Text Editor</h2>
          <RichTextEditor />
        </section>
      </div>
    </div>
  );
};

export default Index;