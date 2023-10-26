/*
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-10-24 16:32:22
 * @LastEditTime: 2023-10-26 15:50:39
 * @LastEditors:  Please set LastEditors
 */

const { createApp, ref, onBeforeMount } = Vue;
// import menuList from "./menu.js"

const config = {
  siteName: "",
};
const banner = {
  title: '智慧校园，家校共育，让天下没有难培育的孩子！',
  desc: '成为一家以爱心、善心、感恩心为核心，以利国、利民、利他为根本，被社会认可，被大众信赖的事业平台。'
}
const loadJson = (name) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `./assets/js/${name}.json`, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  });
};
createApp({
  setup() {
    const menuList = ref([]);
    onBeforeMount(async () => {
      menuList.value = await loadJson("menu");
    });
    return {
      config,
      menuList,
      banner
    };
  },
}).mount("#app");
