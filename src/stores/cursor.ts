import { createStore } from "zustand-x";

type CursorState = {
  isHoveringProject: boolean;
};

export const cursorStore = createStore<CursorState>(
  {
    isHoveringProject: false,
  },
  {
    name: "cursor",
    devtools: true,
    persist: true,
    mutative: true,
  }
).extendActions(({ set }) => ({
  setIsHoveringProject: (isHoveringProject: boolean) => {
    set("state", (draft) => {
      draft.isHoveringProject = isHoveringProject;
      return draft;
    });
  },
}));
