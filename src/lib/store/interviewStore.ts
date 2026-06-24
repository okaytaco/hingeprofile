import { create } from 'zustand';

type InterviewStore = {
  messages: string[];
  sessionId: string | null;
  status: 'idle' | 'loading' | 'ready';
};

export const useInterviewStore = create<InterviewStore>(() => ({
  messages: [],
  sessionId: null,
  status: 'idle',
}));