<<<<<<< HEAD
import { create } from "zustand";

// Interface to define how ToggleState should be formatted
interface ToggleState {
  light: boolean;
  toggleShow: () => void;
}

// Zustand React hook to set state of light boolean in App
export const useToggle = create<ToggleState>((set) => ({
  light: true,
  toggleShow: () => set((state) => ({ light: !state.light })),
}));
=======
import { create } from 'zustand';

// Interface to define how ToggleState should be formatted
interface ToggleState {
  light: boolean;
  toggleShow: () => void;
}

// Zustand React hook to set state of light boolean in App
export const useToggle = create<ToggleState>((set) => ({
  light: true,
  toggleShow: () => set((state) => ({ light: !state.light })),
}));
>>>>>>> master
