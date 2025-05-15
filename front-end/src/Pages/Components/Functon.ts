 import { useAuthStore } from "../Components/Value";



export const placeholder = (id: string, task: string, date: string) => {
  useAuthStore.getState().setId(id);
  useAuthStore.getState().setTaskEdit(task);
  useAuthStore.getState().setDateEdit(date);
};
