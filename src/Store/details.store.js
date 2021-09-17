import { writable } from "svelte/store";
import details from "src/assets/details"
console.log(details)
const detailsStore = writable(details)
export default detailsStore