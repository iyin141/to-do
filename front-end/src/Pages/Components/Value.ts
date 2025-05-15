import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Formdata } from "../Task/Form";

type AuthStore = {
  uid: string;
  token: string;
  toggle: boolean;
  toggle_2: boolean;
  toggle_3: boolean;
  tasks: Array<Formdata>;
  tasks_2: Array<Formdata>;
  count: number;
  count_2: number;
  response: string;
  id: string;
  task_edit: string;
  date_edit: string;
  setUid: (uid: string) => void;
  setToken: (token: string) => void;
  settoggle: (toggle: boolean) => void;
  settoggle_2: (toggle_2: boolean) => void;
  settoggle_3: (toggle_3: boolean) => void;
  settasks: (tasks: Array<Formdata>) => void;
  settasks_2: (tasks_2: Array<Formdata>) => void;
  setcount: (count: number) => void;
  setcount_2: (count_2: number) => void;
  setresponse: (response: string) => void;
  setId: (id: string) => void;
  setTaskEdit: (task_edit: string) => void;
  setDateEdit: (date_edit: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      uid: "",
      token: "",
      toggle: false,
      toggle_2: false,
      toggle_3: false,
      tasks: [], // not in use
      tasks_2: [],
      count: 0,
      count_2: 0,
      response: '',
      id: '',
      task_edit: '',
      date_edit: '',
      setUid: (uid) => set({ uid }),
      setToken: (token) => set({ token }),
      settoggle: (toggle) => set({ toggle }),
      settoggle_2: (toggle_2) => set({ toggle_2 }),
      settoggle_3: (toggle_3) => set({ toggle_3 }),
      settasks: (newTasks) => set((state) => ({ tasks: [...state.tasks, ...newTasks] })), // not in use
      settasks_2: (tasks_2) => set({tasks_2}),
      setcount: (count) => set({ count }),
      setcount_2: (count_2) => set({ count_2 }),
      setresponse: (response) => set({ response }),
      setId: (id) => set({ id }),
      setTaskEdit: (task_edit) => set({ task_edit }),
      setDateEdit: (date_edit) => set({ date_edit }),
      logout: () =>
        set({
          uid: "",
          token: "",
          toggle: false,
          toggle_2: false,
          toggle_3: false,
          tasks: [], // not in use
          tasks_2: [],
          count: 0,
          count_2: 0,
          response: '',
          id: '',
          task_edit: '',
          date_edit: '',
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
