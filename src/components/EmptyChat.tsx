import { Settings } from 'lucide-react';
import EmptyChatMessageInput from './EmptyChatMessageInput';
import { useState } from 'react';
import { File } from './ChatWindow';
import Link from 'next/link';
import Image from 'next/image';

const EmptyChat = ({
  sendMessage,
  focusMode,
  setFocusMode,
  optimizationMode,
  setOptimizationMode,
  fileIds,
  setFileIds,
  files,
  setFiles,
}: {
  sendMessage: (message: string) => void;
  focusMode: string;
  setFocusMode: (mode: string) => void;
  optimizationMode: string;
  setOptimizationMode: (mode: string) => void;
  fileIds: string[];
  setFileIds: (fileIds: string[]) => void;
  files: File[];
  setFiles: (files: File[]) => void;
}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-5 right-5 z-10">
        <Link href="/settings">
          <Settings className="cursor-pointer lg:hidden" />
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-8 max-w-screen-sm mx-auto px-4 w-full">
        <div className="flex flex-col items-center space-y-6">
          <Image 
            src="/samsung-logo.jpg" 
            alt="Samsung Logo" 
            width={150} 
            height={150} 
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <h2 className="text-black/70 dark:text-white/70 text-3xl font-medium text-center">
            Explore AI-powered search engine.
          </h2>
        </div>
        <EmptyChatMessageInput
          sendMessage={sendMessage}
          focusMode={focusMode}
          setFocusMode={setFocusMode}
          optimizationMode={optimizationMode}
          setOptimizationMode={setOptimizationMode}
          fileIds={fileIds}
          setFileIds={setFileIds}
          files={files}
          setFiles={setFiles}
        />
      </div>
    </div>
  );
};

export default EmptyChat;
