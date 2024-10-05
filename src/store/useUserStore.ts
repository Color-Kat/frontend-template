import { create } from 'zustand';
import { sleep } from "@/utils/sleep.ts";
import { produce } from "immer";

interface IUserStore {
    users: ({id: number, name: string})[];
    isLoading: boolean;

    loadUsers: () => void;
    removeAllUsers: () => void;
    updateUserById: (id: number, name: string) => void;
}

export  const useUserStore = create<IUserStore>((set) => ({
    users: [],
    isLoading: false,
    loadUsers: async () => {
        set({ isLoading: true });

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        await sleep(3000);

        set({ users: users, isLoading: false });
    },
    removeAllUsers: () => {
        set({ users: [] });
    },

    // Using immer - directly mutate state
    updateUserById: (id: number, name: string) => {
        set(produce((state: IUserStore) => {
            state.users[id].name = name;
        }));
    }
}));
