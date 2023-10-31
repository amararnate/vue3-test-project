<script lang="ts" setup>
import { reactive } from "vue";
import type { DeleteContexRecord, ContextData, ElementTarget } from "./type";

defineProps<{
  tableData: ContextData[];
}>();

const emit = defineEmits(["enableDeleteRecord"]);
const ContexRecordIds: DeleteContexRecord[] = reactive([]);

const selectContextRecord = (e: ElementTarget) => {
  const contextId: number = e.target.value;
  if (e.target.checked) {
    ContexRecordIds.push({
      id: contextId,
    });
  } else {
    const index = ContexRecordIds.findIndex((item) => item.id === contextId);
    if (index !== -1) {
      ContexRecordIds.splice(index, 1);
    }
  }

  const makeDeleteButtonDisabled = ContexRecordIds.length === 0;
  emit("enableDeleteRecord", {
    showDelete: makeDeleteButtonDisabled,
    deleteContexRecordData: ContexRecordIds,
  });
};
</script>
<template>
  <div class="context-table">
    <scale-table>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Profession</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="tableData.length === 0">
            <td colspan="5" class="no-record-found">No record found</td>
          </tr>

          <tr v-for="table in tableData" v-bind:key="table.id">
            <td>
              <scale-checkbox
                :value="table.id"
                @scaleChange="selectContextRecord"
              />
            </td>
            <td>{{ table.firstName }}</td>
            <td>{{ table.lastName }}</td>
            <td>
              <scale-tag color="black" size="large"
                >{{ table.professionName }}
              </scale-tag>
            </td>
            <td>{{ table.description }}</td>
          </tr>
        </tbody>
      </table>
    </scale-table>
  </div>
</template>

<style scoped lang="scss">
.context-table {
  margin-top: 50px;
}
</style>
