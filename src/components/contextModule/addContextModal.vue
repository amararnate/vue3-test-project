<script lang="ts" setup>
import { reactive, ref, type Ref } from 'vue'
import ContextDataService from '../../services/ContexDataService'
import type {
  ProfessionList,
  CustomElement,
  ContextData,
  ElementTarget,
} from '../../components/contextModule/type'

const emit = defineEmits(['refreshList'])

const firstName: Ref<string> = ref('')
const lastName: Ref<string> = ref('')
const profession: Ref<number> = ref(0)
const description: Ref<string> = ref('')

const isInvalidFirstName: Ref<boolean> = ref(false)
const isInvalidLastName: Ref<boolean> = ref(false)
const isInvalidProfession: Ref<boolean> = ref(false)
const isInvalidDescription: Ref<boolean> = ref(false)

let professionList: ProfessionList[] = reactive([])

const submitForm = () => {
  if (
    firstName.value == '' ||
    lastName.value == '' ||
    profession.value == 0 ||
    description.value == ''
  ) {
    validateFirstName()
    validateLastName()
    validateProfession()
    validateDescription()
    return false
  }

  const formData: ContextData = {
    firstName: firstName.value,
    lastName: lastName.value,
    profession: profession.value,
    description: description.value
  }
  ContextDataService.saveContexData(formData)
  closeModal()
  emit('refreshList')
}

const closeModal = () => {
  const modal = document.getElementById('add-context') as CustomElement
  modal.opened = false
}

const professionDropdownChange = (e: ElementTarget) => {
  profession.value = e.target.value
  validateProfession()
}

const loadProfessionList = () => {
  professionList = ContextDataService.getProfession()
}
loadProfessionList()

const resetForm = () => {
  firstName.value = ''
  lastName.value = ''
  profession.value = 0
  description.value = ''
  isInvalidFirstName.value = false
  isInvalidLastName.value = false
  isInvalidProfession.value = false
  isInvalidDescription.value = false
}
defineExpose({
  resetForm
})
const validateFirstName = () => {
  isInvalidFirstName.value = firstName.value == ''
}
const validateLastName = () => {
  isInvalidLastName.value = lastName.value == ''
}
const validateProfession = () => {
  isInvalidProfession.value = profession.value == 0
}
const validateDescription = () => {
  isInvalidDescription.value = description.value == ''
}
</script>

<template>
  <scale-modal heading="Add Context" id="add-context" size="large">
    <form class="add-context-form">
      <div class="form-control">
        <scale-text-field
          id="firstName"
          label="First Name"
          :invalid="isInvalidFirstName"
          v-model="firstName"
          helper-text="Please add your first name"
          @keyup="validateFirstName"
        ></scale-text-field>
      </div>

      <div class="form-control">
        <scale-text-field
          id="lastName"
          label="Last Name"
          :invalid="isInvalidLastName"
          v-model="lastName"
          helper-text="Please add your last name"
          @keyup="validateLastName"
        ></scale-text-field>
      </div>

      <div class="form-control">
        <scale-dropdown-select
          label="Profession"
          helper-text="Please select your profession"
          :invalid="isInvalidProfession"
          v-model="profession"
          @scale-change="professionDropdownChange"
        >
          <scale-dropdown-select-item :value="null"> Select Profession </scale-dropdown-select-item>

          <scale-dropdown-select-item
            :value="professionRecord.id"
            v-bind:key="professionRecord.id"
            v-for="professionRecord in professionList"
          >
            {{ professionRecord.profession }}
          </scale-dropdown-select-item>
        </scale-dropdown-select>
      </div>

      <div class="form-control">
        <scale-textarea
          label="Description"
          helper-text="Please add your description"
          v-model="description"
          :invalid="isInvalidDescription"
          @keyup="validateDescription"
        ></scale-textarea>
      </div>
    </form>

    <scale-button slot="action" variant="secondary" @click.prevent="closeModal">
      Cancel
    </scale-button>
    <scale-button slot="action" @click="submitForm"> Add Context </scale-button>
  </scale-modal>
</template>
