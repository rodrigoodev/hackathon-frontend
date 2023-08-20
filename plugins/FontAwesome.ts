import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGripVertical, faFileLines, faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faGripVertical);
library.add(faFileLines);
library.add(faHouse);
library.add(faPlus);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});