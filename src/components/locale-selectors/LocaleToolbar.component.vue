<template>
  <div class="locale-toolbar">
  <div class="locale-switches">
    <label role="button"
      v-for="(item, index) in items"
      :key="index"
      :class="`locale-radio ${ item.selected ? 'selected' : '' }`.trim()">
      <i :class="`flag-icons ${ item.flag }`"></i>
      <input type="radio" name="locale" :value="item.locale" class="icon-button" :checked="item.selected" @click="onItemClick(item)"/>
    </label>
  </div>
  <span>{{ selectedLocaleMessage }}</span>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { LocaleInfoInterface } from '@/models/LocaleInfo.interface'

  const LocaleToolbarComponent = {
    props: {
      items: {
        type: Array
      }
    },
    setup(props: any) {
      const i18n = useI18n()

      const selectedLocaleMessage = computed(() => {
        const items: LocaleInfoInterface[] = (props.items || [])
        const item = items.find((item) => item.selected)
        if (item) {
          return item.name
        }
        return ''
      })

      const onItemClick = (clickedItem: LocaleInfoInterface) => {
        const items: LocaleInfoInterface[] = (props.items || [])
        // loop through item and set only the clickedItem selected to true
        items.forEach((item) => {
          if (item.locale !== clickedItem.locale) {
            item.selected = false
          } else {
            item.selected = true
            // switch i18n selected locale
            i18n.locale.value = item.locale
          }
        })
      }

      return {
        i18n,
        selectedLocaleMessage,
        //items,
        onItemClick
      }
    }
  }

  export default defineComponent(LocaleToolbarComponent)
</script>

<style lang="scss">
  .locale-toolbar {
    display: inline-grid;
    grid-template-columns: 80px auto 80px;
    grid-gap: 8px;
    align-items: center;

    .locale-switches {
      display: inline-flex;
      justify-content: center;

      label.locale-radio {
        cursor: pointer;
        display: block;
        padding: 5px;

        &.selected {
          outline: solid 1px red;
        }
      }

      input {
        display:none;
      }
    }
  }
</style>
