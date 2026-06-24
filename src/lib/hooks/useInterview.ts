import { create } from 'zustand';

type InterviewState = {
  messages: string[];
};

export const useInterview = create<InterviewState>(() => ({
  messages: [],
}));