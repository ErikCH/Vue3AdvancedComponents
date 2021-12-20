<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["info"],
  setup(props) {
    return () => props.info;
  }
});
</script>
