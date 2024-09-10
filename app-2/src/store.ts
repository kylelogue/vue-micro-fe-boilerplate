import { defineStore } from 'pinia';

export const currentItemStore = defineStore('app-2-store', {
    state: () => ({
        something: ''
    })
});