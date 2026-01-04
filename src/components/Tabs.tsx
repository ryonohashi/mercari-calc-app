import { useState } from 'react';
import type { ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id || '');

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* タブヘッダー */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors
                whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? 'text-mercari-red border-b-2 border-mercari-red bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }
              `}
            >
              {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* タブコンテンツ */}
      <div className="p-6">
        {activeTabContent}
      </div>
    </div>
  );
}

