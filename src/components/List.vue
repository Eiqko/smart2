<template>
  <div>
   
    <h3>THE LIST</h3>
    <div class="listing">
      <div
        v-for="list in allTodos"
        :key="list.id"
        class="list"
      >
        {{ list.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "List",
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.listing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 80%;
  margin: 0 auto;
}
.list {
  border: 1px solid #ccc;
  background: #d42c5e;
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
  position: relative;
  cursor: pointer;
}


@media (max-width: 500px) {
  .listing {
    grid-template-columns: 1fr;
  }
}
</style>