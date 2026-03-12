// 


import { createSlice } from "@reduxjs/toolkit";
import { sidebarList } from "../../utils/MockData";

const adminSidebarSlice = createSlice({
  name: "side",
  initialState: { adminSidebar: sidebarList },
  reducers: {
    currentSidebar: (state, action) => {
      const selectedRoute = action.payload;

      state.adminSidebar = state.adminSidebar.map(item => {
        // 1. Handle items WITH children
        if (item.children && item.children.length > 0) {
          const updatedChildren = item.children.map(child => ({
            ...child,
            isActive: child.route === selectedRoute
          }));

          const hasActiveChild = updatedChildren.some(child => child.isActive);
          
          return {
            ...item,
            isActive: hasActiveChild,
            children: updatedChildren
          };
        }

        // 2. Handle top-level items WITHOUT children (like Contact Us)
        return {
          ...item,
          isActive: item.route === selectedRoute
        };
      });
    }
  },
});

export const { currentSidebar } = adminSidebarSlice.actions;
export default adminSidebarSlice.reducer;