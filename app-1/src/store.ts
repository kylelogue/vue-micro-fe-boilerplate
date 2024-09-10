import { defineStore } from 'pinia';

export const currentItemStore = defineStore('app-1-store', {
    state: () => ({
        something: ''
    })
});