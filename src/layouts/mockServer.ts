const el1 = {
  id: "1",
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
  col1: "열1",
  col5: "열5",
  col2: "열2",
  type: "A",
};
const el3 = {
  id: "3",
  col3: "열3",
  col4: "열4",
  col5: "열5",
  col1: "열1",
  type: "B",
};

const init = [el1, el2, el3];
const typeA = [el1, el2];
const typeB = [el3];
const typeC: any = [];

export { init, typeA, typeB, typeC };
