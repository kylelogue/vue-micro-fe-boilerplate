import { defineStore } from 'pinia';

export const currentItemStore = defineStore('main-store', {
    state: () => ({
        something: ''
    })
});