import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgHeight, setBgHeight] = useState(0);

  useEffect(() => {
    // Update background height based on count
    setBgHeight(Math.min(100, Math.max(0, count * 2)));
    
    // Log for debugging
    console.log('Counter updated:', count);
  }, [count]);

  const increment = () => {
    setCount(prev => prev + 1);
    toast({
      title: "Counter increased",
      description: `New value: ${count + 1}`,
    });
  };

  const decrement = () => {
    setCount(prev => Math.max(0, prev - 1));
    toast({
      title: "Counter decreased",
      description: `New value: ${Math.max(0, count - 1)}`,
    });
  };

  const reset = () => {
    setCount(0);
    setBgHeight(0);
    toast({
      title: "Counter reset",
      description: "Counter has been reset to 0",
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto p-6 rounded-lg shadow-lg overflow-hidden">
      <div 
        className="absolute inset-0 bg-primary/10 transition-all duration-500 ease-bezier"
        style={{ height: `${bgHeight}%` }}
      />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Counter</h2>
        <div className="text-4xl font-bold text-center mb-6">{count}</div>
        <div className="flex gap-4 justify-center">
          <Button onClick={decrement} variant="outline">-</Button>
          <Button onClick={reset} variant="destructive">Reset</Button>
          <Button onClick={increment} variant="default">+</Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;