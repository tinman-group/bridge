import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export class SidebarStore {
  $isOpen = atomWithStorage("sidebar.isOpen", true);

  constructor() {}

  static readonly default = new SidebarStore();
}

export const useSidebarStore = () => {
  const store = SidebarStore.default;
  const [isOpen, setIsOpen] = useAtom(store.$isOpen);
  return {
    store,
    isOpen,
    setIsOpen,
  };
};
