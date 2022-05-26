<template>
  <div>
    {{ searchItem }}
    <c-multi-select :selects="selects" v-model="searchItem" />
  </div>
</template>
<script setup lang="ts">
import CMultiSelect from "@/components/search/conditions/CMultiSelect.vue";
import { computed, reactive } from "vue";

const searchItem = reactive({
  fld_grade: null,
  fld_class: null,
  fld_student: null,
});

const dataOne = [
  {
    name: "1학년",
    grade: 1,
    classes: [
      {
        name: "1-무지개반",
        class: 1,
        students: [
          {
            name: "10101-홍길동",
            id: 10101,
          },
          {
            name: "10102-이순신",
            id: 10102,
          },
          {
            name: "10103-유재석",
            id: 10103,
          },
        ],
      },
      {
        name: "1-늘푸른반",
        class: 2,
        students: [
          {
            name: "10201-가나가",
            id: 10201,
          },
          {
            name: "10202-가나나",
            id: 10202,
          },
          {
            name: "10203-가나다",
            id: 10203,
          },
        ],
      },
      {
        name: "1-해돋이반",
        class: 3,
        students: [
          {
            name: "10301-가다가",
            id: 10301,
          },
          {
            name: "10302-가다나",
            id: 10302,
          },
          {
            name: "10303-가다다",
            id: 10303,
          },
        ],
      },
    ],
  },
  {
    name: "2학년",
    grade: 2,
    classes: [
      {
        name: "2-무지개반",
        class: 1,
        students: [
          {
            name: "20101-나가가",
            id: 20101,
          },
          {
            name: "20102-나가나",
            id: 20102,
          },
          {
            name: "20103-나가다",
            id: 20103,
          },
        ],
      },
      {
        name: "2-늘푸른반",
        class: 2,
        students: [
          {
            name: "20201-나나가",
            id: 20201,
          },
          {
            name: "20202-나나나",
            id: 20202,
          },
          {
            name: "20203-나나다",
            id: 20203,
          },
        ],
      },
      {
        name: "2-해돋이반",
        class: 3,
        students: [
          {
            name: "20301-나다가",
            id: 20301,
          },
          {
            name: "20302-나다나",
            id: 20302,
          },
          {
            name: "20303-나다다",
            id: 20303,
          },
        ],
      },
    ],
  },
];

const dataTwo = computed(() => {
  return dataFor(dataOne, "grade", "fld_grade", "classes");
});

const dataThree = computed(() => {
  return dataFor(dataTwo.value, "class", "fld_class", "students");
});

function dataFor(
  parentData: any[],
  parentKey: string,
  parentField: "fld_grade" | "fld_class" | "fld_student",
  dataKey: string
) {
  const prntSltObj = parentData.find(
    (e) => e[parentKey] === searchItem[parentField]
  );
  return prntSltObj ? prntSltObj[dataKey] : [];
}

const selects = reactive([
  {
    valueKey: "grade",
    descriptionKey: "name",
    field: "fld_grade",
    data: dataOne,
    label: "학생선택",
    placeholder: "학년",
  },
  {
    valueKey: "class",
    descriptionKey: "name",
    field: "fld_class",
    placeholder: "반",
    data: "classes",
    dependsOn: "fld_grade",
  },
  {
    valueKey: "id",
    descriptionKey: "name",
    field: "fld_student",
    placeholder: "이름",
    data: "students",
    dependsOn: "fld_class",
  },
]);
</script>
