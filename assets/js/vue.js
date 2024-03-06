/*
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-10-24 16:32:22
 * @LastEditTime: 2023-11-22 09:45:27
 * @LastEditors:  Please set LastEditors
 */

const { createApp, ref, onBeforeMount } = Vue;

const config = {
  siteName: "",
};
const banner = {
  title: '让人人参与0元创业就业，轻松赚钱，共创共富！',
  desc: '成为一家以爱心、善心、感恩心为核心，以利国、利民、利他为根本，被社会认可，被大众信赖的事业平台成为一家以爱心、善心、感恩心为核心，以利国、利民、利他为根本，被社会认可，被大众信赖的事业平台。'
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
    const teamList = ref([]);
    const serviceList = ref([]);
    onBeforeMount(async () => {
      menuList.value = await loadJson("menu");
      teamList.value = await loadJson("team");
      serviceList.value = await loadJson("services");
    });
    return {
      config,
      menuList,
      banner,
      teamList,
      serviceList
    };
  },
}).mount("#app");
