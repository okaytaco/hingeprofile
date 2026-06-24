import { create } from 'zustand';

type ConfidenceState = {
  value: number;
};

export const useConfidence = create<ConfidenceState>(() => ({
  value: 0,
}));