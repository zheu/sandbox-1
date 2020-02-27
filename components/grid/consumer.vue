<template>
  <Grid v-bind="{ items }">
    <GridHeaders slot="headers" slot-scope="{ bindings, events }" v-bind="bindings" v-on="events">
      <template slot-scope="{}">
        <th class="text-red-900">name</th>
        <th>phone</th>
        <th>mail</th>
        <th>profession</th>
      </template>
    </GridHeaders>
    <GridColumns
      slot="columns"
      slot-scope="{ bindings, events, item }"
      v-bind="bindings"
      v-on="events"
    >
      <td>{{ item.name }}</td>
      <td>{{ item.phone }}</td>
      <td>{{ item.mail }}</td>
      <td>{{ item.profession }}</td>
    </GridColumns>
  </Grid>
</template>

<script>
import Grid from "./components/Grid";
import GridColumns from "./components/GridColumns";
import GridHeaders from "./components/GridHeaders";
import items from "./data/items";

export default {
  name: "App",
  components: { Grid, GridColumns, GridHeaders },
  data: () => ({
    items
  })
};
</script>

<style>
</style>
