import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGripVertical, faFileLines, faHouse, faPlus, faUser, faLock, faAt } from "@fortawesome/free-solid-svg-icons";

library.add(faGripVertical);
library.add(faFileLines);
library.add(faHouse);
library.add(faPlus);
library.add(faUser);
library.add(faLock);
library.add(faAt);


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});