import { create } from 'zustand';

type ProfileState = {
  loading: boolean;
};

export const useProfile = create<ProfileState>(() => ({
  loading: false,
}));