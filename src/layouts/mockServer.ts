const el1 = {
  id: "1",
  name: "홍길동",
  col1: "열1",
  col2: "열2",
  col3: "열3",
  col4: "열4",
  col5: "열5",
  col6: "열6",
  col7: "열7",
  col8: "열8",
  type: "A",
};
const el2 = {
  id: "2",
  name: "김철수",
  col1: "열1",
  col5: "열5",
  col2: "열2",
  type: "A",
};
const el3 = {
  id: "3",
  name: "김영희",
  col3: "열3",
  col4: "열4",
  col5: "열5",
  col1: "열1",
  type: "B",
};
const elZ = {
  id: "z",
  name: "유재석",
  type: "Z",
  col1: "열1z",
};

const init = [el1, elZ, el2, el3];
const typeA = [el1, el2];
const typeB = [el3];
const typeC: any = [];

export { init, typeA, typeB, typeC };
