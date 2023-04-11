import { getMenuList } from "@/utils/api";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";

export const useMenuStore = defineStore("menuList", () => {
  const menuList = ref([]);
  const formatMenuList = computed(() => {
    function r(params: any) {
      return menuList.value?.filter((item: any) => {
        if (item.parent_id === params) {
          let children = r(item.id);
          item.children = children?.length ? children : null;
          return true;
        }
      });
    }
    menuList.value = r(-1);
    return menuList;
  });
  const saveMenuList = async () => {
    if (localStorage.getItem("token")) {
      const userStore = useUserStore();
      const { data, status } = await getMenuList("/menu/menuByRole", {
        roleId: userStore.user?.roleId,
      });
      if (status === 200) {
        menuList.value = data;
      }
    }
  };

  return { menuList, saveMenuList, formatMenuList };
});
