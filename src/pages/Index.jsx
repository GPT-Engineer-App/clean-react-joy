import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Simple React App</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
            <p className="text-gray-600">
              This is a super simple and clean React application. Feel free to modify and expand upon it.
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-100 text-center p-4">
        <p className="text-sm text-gray-600">© 2023 Simple React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;