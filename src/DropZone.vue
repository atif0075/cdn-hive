<script setup>
import { useDropZone } from "@vueuse/core";
import Progress from "./Progress.vue";
import { ref } from "vue";
import "../firebase";
import {
  getStorage,
  ref as Fref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const emit = defineEmits(["fileType", "linkUrl", "isLinkGenerated"]);
const storage = getStorage();
const dropZoneRef = ref(null);
const UpProgress = ref(0);
const isUploading = ref(false);
const isCSS = ref(false);
const isJS = ref(false);
const isLinkGenerated = ref(false);
const link = ref("");
const isError = ref(false);
function onDrop(files) {
  isError.value = false;
  emit("isLinkGenerated", false);
  // get file extension
  const fileExtension = files[0].name.split(".").pop();
  if (fileExtension === "css") {
    isCSS.value = true;
    emit("fileType", "css");
  } else if (fileExtension === "js") {
    isJS.value = true;
    emit("fileType", "js");
  } else {
    isCSS.value = false;
    isJS.value = false;
    isError.value = true;
    return false;
  }
  isUploading.value = true;
  // Upload file and metadata to the object 'images/mountains.jpg'
  const uuid = crypto.randomUUID();
  const storageRef = Fref(
    storage,
    `${fileExtension}/` + `${uuid}+${files[0].name}`
  );
  const uploadTask = uploadBytesResumable(storageRef, files[0]);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      UpProgress.value = Number(progress.toFixed(0));
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        emit("linkUrl", downloadURL);
        emit("isLinkGenerated", true);
        UpProgress.value = 0;
        isUploading.value = false;
        isLinkGenerated.value = true;
        link.value = downloadURL;
      });
    }
  );
}
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<template>
  <div
    ref="dropZoneRef"
    class="w-full h-96 bg-[#eff0f3] overflow-hidden dark:bg-[#272a2f] flex justify-center items-center rounded-3xl p-10 mt-10 transition-all duration-500 ease-in-out"
  >
    <div
      :class="isOverDropZone ? 'scale-105 ' : ''"
      class="w-[30rem] h-[30rem] rounded-full bg-white/30 dark:bg-black/5 flex justify-center items-center transition-all duration-500 ease-in-out"
    >
      <div
        :class="isOverDropZone ? 'scale-105 ' : ''"
        class="w-96 h-96 rounded-full bg-white/40 dark:bg-black/5 flex justify-center items-center transition-all duration-500 ease-in-out"
      >
        <div
          :class="isOverDropZone ? 'scale-110 ' : ''"
          class="h-72 w-72 bg-white/50 dark:bg-black/5 rounded-full flex justify-center items-center transition-all duration-500 ease-in-out"
        >
          <div
            :class="isOverDropZone ? 'scale-110 ' : ''"
            class="h-40 w-40 border-4 border-dashed animate-spins border-green-500 bg-transparent rounded-full flex justify-center items-center transition-all duration-500 ease-in-out"
          >
            <div
              :class="isOverDropZone ? 'scale-105 ' : ''"
              class="h-36 w-36 border dark:border-zinc-600 shadow-lg bg-white dark:bg-black/10 rounded-full animate-spins-reverse flex flex-col justify-center items-center transition-all duration-500 ease-in-out"
            >
              <div class="grid grid-cols-2 gap-1">
                <img
                  src="./assets/css.svg"
                  alt="css"
                  :class="isOverDropZone ? '-rotate-12' : ''"
                  class="dark:invert transition-all duration-500 ease-in-out"
                />
                <img
                  src="./assets/js.svg"
                  alt="js"
                  :class="isOverDropZone ? 'rotate-12' : ''"
                  class="dark:invert transition-all duration-500 ease-in-out"
                />
              </div>
              <p>Drop File</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="isError"
    class="w-full bg-red-500 text-white overflow-hidden rounded-2xl p-3 mt-5 transition-all duration-500 ease-in-out"
  >
    Invalid File Type
  </div>
  <div
    v-if="isUploading"
    class="w-full bg-[#eff0f3] overflow-hidden dark:bg-[#272a2f] rounded-2xl p-5 mt-10 transition-all duration-500 ease-in-out"
  >
    <Progress :progress="UpProgress" />
  </div>
</template>
<style>
.aside {
  display: none !important;
}
@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.animate-spin-reverse {
  animation: spin-reverse 30s linear infinite;
}
.animate-spin {
  animation: spin 30s linear infinite;
}
.grad {
  background: linear-gradient(-45deg, #41b88380 30%, #35495e80);
}
</style>
