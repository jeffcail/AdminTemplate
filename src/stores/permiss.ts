import { defineStore } from 'pinia';

interface ObjectList {
    [key: string]: string[];
}

export const usePermissStore = defineStore('permiss', {
    state: () => {
        const defaultList: ObjectList = {
            'admin': ['admin'],
            'user': ['user'],
        };

        const username = localStorage.getItem('username');
        console.log(username);
        return {
            key: (username == 'admin' ? defaultList['admin'] : defaultList['user'] as string[]),
            defaultList,
        }
    },
    actions: {
        handleSet(val: string[]) {
            this.key = val;
        },
    },
});