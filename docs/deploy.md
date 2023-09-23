<script setup>
import { ref } from 'vue';
import DropZone from '../src/DropZone.vue';   
const whichFile = ref('');
const whichLink = ref('');
const isLink = ref(false);
const getLink = (link) => {
    whichLink.value = link;
} 
const getFileType = (fileType) => {
    whichFile.value = fileType;
}
</script>

# Deploy Your CDN

<DropZone @linkUrl="getLink($event)" @fileType="getFileType($event)" @isLinkGenerated="isLink = $event" />

<main :class="isLink  ? '' : 'hidden'">

  <div   :class="whichFile === 'css' ? '' : 'hidden'">
  
  ```js-vue
  
   <link rel="stylesheet" href="{{whichLink}}">
  
  ````
  
  </div>
  
  <div class="" :class="whichFile === 'js' ? '' : 'hidden'">
  
  ```js-vue
    <script src="{{whichLink}}"></script>
  ````
  
  </div>

</main>
