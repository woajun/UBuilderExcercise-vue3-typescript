<template>
  <div>
    {{ searchItem }}
    <c-multi-select :selects="selects" v-model="searchItem" />
  </div>
</template>
<script setup lang="ts">
import CMultiSelect from "@/components/search/conditions/CMultiSelect.vue";
import { reactive } from "vue";

const searchItem = reactive({});

const data = [
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
  {
    name: "3학년",
    grade: 3,
    classes: [
      {
        name: "3-무지개반",
        class: 1,
        students: [
          {
            name: "30101-나가가",
            id: 30101,
          },
        ],
      },
      {
        name: "3-늘푸른반",
        class: 2,
        students: [
          {
            name: "30201-나나가",
            id: 30201,
          },
        ],
      },
      {
        name: "3-해돋이반",
        class: 3,
        students: [
          {
            name: "30301-나다가",
            id: 30301,
          },
        ],
      },
    ],
  },
  {
    name: "4학년",
    grade: 4,
    classes: [
      {
        name: "4-무지개반",
        class: 1,
        students: [
          {
            name: "40101-나가가",
            id: 40101,
          },
        ],
      },
      {
        name: "4-늘푸른반",
        class: 2,
        students: [
          {
            name: "40201-나나가",
            id: 40201,
          },
        ],
      },
      {
        name: "4-해돋이반",
        class: 3,
        students: [
          {
            name: "40301-나다가",
            id: 40301,
          },
        ],
      },
    ],
  },
  {
    name: "5학년",
    grade: 5,
    classes: [
      {
        name: "5-무지개반",
        class: 1,
        students: [
          {
            name: "50101-나가가",
            id: 50101,
          },
        ],
      },
      {
        name: "5-늘푸른반",
        class: 2,
        students: [
          {
            name: "50201-나나가",
            id: 50201,
          },
        ],
      },
      {
        name: "5-해돋이반",
        class: 3,
        students: [
          {
            name: "50301-나다가",
            id: 50301,
          },
        ],
      },
    ],
  },
  {
    name: "6학년",
    grade: 6,
    classes: [
      {
        name: "6-무지개반",
        class: 1,
        students: [
          {
            name: "60101-나가가",
            id: 60101,
          },
        ],
      },
      {
        name: "6-늘푸른반",
        class: 2,
        students: [
          {
            name: "60201-나나가",
            id: 60201,
          },
        ],
      },
      {
        name: "6-해돋이반",
        class: 3,
        students: [
          {
            name: "60301-나다가",
            id: 60301,
          },
        ],
      },
    ],
  },
];

const selects = [
  {
    valueKey: "grade",
    descriptionKey: "name",
    field: "fld_grade",
    data: data,
    label: "학생선택",
    placeholder: "학년",
  },
  {
    valueKey: "class",
    descriptionKey: "name",
    field: "fld_class",
    placeholder: "반",
    data: "classes",
    dependsOnField: "fld_grade",
  },
  {
    valueKey: "id",
    descriptionKey: "name",
    field: "fld_student",
    placeholder: "이름",
    data: "students",
    dependsOnField: "fld_class",
  },
];
</script>
