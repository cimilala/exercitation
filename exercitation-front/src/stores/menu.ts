import { getMenuList } from "@/utils/api";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
export const useMenuStore = defineStore("menuList", () => {
  const menuList = ref([]);
  const formatMenuList = computed(() => {
    function r(params: any) {
      return menuList.value?.filter((item: any) => {
        if (item.parent_id === params) {
          let children = r(item.id);
          item.children = children?.length ? children : [];
          return true;
        }
      });
    }
    return r(-1);
  });
  const saveMenuList = async () => {
    if (localStorage.getItem("token")) {
      const {user} = storeToRefs(useUserStore())
      const { data, status } = await getMenuList(`/menu/menuByRole/${user.value?.roleId}`);
      if (status === 200) {
        menuList.value = data;
      }
    }
  };

  return { menuList, saveMenuList, formatMenuList };
});
