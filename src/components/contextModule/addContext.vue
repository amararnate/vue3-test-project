<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import contextTable from './contextTable.vue'
import addContextModal from './addContextModal.vue'
import type {
  ContextData,
  CustomElement,
  DeleteContexRecordMetaData,
  DeleteContexRecord
} from '../../components/contextModule/type'
import ContextDataService from '../../services/ContexDataService'

const disabledDeleteButton = ref(true)
const addContextModalRef = ref()
let tableData: Ref<ContextData[]> = ref([])
const contextDeleteIds: Ref<DeleteContexRecord[]> = ref([])

const addContext = () => {
  openModal()
}

const openModal = () => {
  const modal = document.getElementById('add-context') as CustomElement
  modal.opened = true
  addContextModalRef.value?.resetForm()
}

const enableDeleteRecord = (data: DeleteContexRecordMetaData) => {
  disabledDeleteButton.value = data.showDelete
  contextDeleteIds.value = data.deleteContexRecordData
}

const deleteContextRecords = () => {
  ContextDataService.deleteContexData(contextDeleteIds.value)
  loadContextData()
  disabledDeleteButton.value = true
  contextDeleteIds.value = []
}

const loadContextData = () => {
  tableData.value = ContextDataService.getContexData()
}
loadContextData()
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="context-action">
        <div class="context-action__add action-button">
          <scale-button @click="addContext">Add Context</scale-button>
        </div>
        <div class="context-action__delete action-button">
          <scale-button icon-only :disabled="disabledDeleteButton" @click="deleteContextRecords">
            <scale-icon-action-remove accessibility-title="remove" selected />
          </scale-button>
        </div>
      </div>

      <context-table :table-data="tableData" @enable-delete-record="enableDeleteRecord" />

      <add-context-modal ref="addContextModalRef" @refresh-list="loadContextData" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.context-action {
  display: flex;
  .action-button {
    padding: 10px;
  }
}
</style>
