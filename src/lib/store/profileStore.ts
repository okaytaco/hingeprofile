import { create } from 'zustand';

type ProfileStore = {
  generatedProfile: unknown | null;
  loading: boolean;
};

export const useProfileStore = create<ProfileStore>(() => ({
  generatedProfile: null,
  loading: false,
}));