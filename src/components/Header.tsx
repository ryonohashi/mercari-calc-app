import { Calculator } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <Calculator className="w-8 h-8 text-mercari-red" aria-hidden="true" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            メルカリ利益計算機
          </h1>
        </div>
      </div>
    </header>
  );
}

