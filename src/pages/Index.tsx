import Counter from "@/components/Counter";
import UserForm from "@/components/UserForm";
import RichTextEditor from "@/components/RichTextEditor";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 py-12 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-900 hover:scale-105 transition-transform duration-300">
          React Project Dashboard
        </h1>
        
        {/* First Row - Counter */}
        <div className="max-w-xl mx-auto animate-scale-in">
          <section className="space-y-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center text-purple-800">Counter Component</h2>
            <Counter />
          </section>
        </div>

        {/* Second Row - Editor and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 animate-scale-in">
          <section className="space-y-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center text-purple-800">Rich Text Editor</h2>
            <RichTextEditor />
          </section>

          <section className="space-y-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center text-purple-800">User Data Form</h2>
            <UserForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;