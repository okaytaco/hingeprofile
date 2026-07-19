'use client';

import { useRef, useEffect } from 'react';
import type { InterviewMessage } from '@/lib/types/interview';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  messages: InterviewMessage[];
  isStreaming?: boolean;
}

export default function ChatWindow({ messages, isStreaming }: ChatWindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isUserScrolledUp = useRef(false);

  // Track if user has manually scrolled up away from the bottom
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const distanceFromBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;
    // If user is more than 120px away from bottom, mark as scrolled up
    isUserScrolledUp.current = distanceFromBottom > 120;
  };

  useEffect(() => {
    // Only auto-scroll to bottom if user hasn't manually scrolled up
    if (!isUserScrolledUp.current) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isStreaming]);

  // When a new message arrives from user (last message is 'user'), reset scroll lock & scroll to bottom
  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.role === 'user') {
      isUserScrolledUp.current = false;
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      className="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-8 py-6"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-5">
        {messages.map((msg, i) => (
          <MessageBubble
            key={`${msg.role}-${i}`}
            message={msg}
            isLatest={i === messages.length - 1}
          />
        ))}

        {isStreaming &&
          messages[messages.length - 1]?.role !== 'assistant' && (
            <TypingIndicator />
          )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}