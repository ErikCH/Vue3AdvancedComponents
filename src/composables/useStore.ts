import { reactive } from "vue";

const store = reactive({});

export function useStore() {
  return store as any;
}
