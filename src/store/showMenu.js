import { writable } from "svelte/store";

let showMenu = writable(false) 
export const toggleMenu = () => showMenu.update((v) => !v);
export default showMenu