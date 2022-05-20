type Data = Array<Record<string, any>>;

export const selects = [
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt1",
    data: loadSlt1Data,
    label: "선택",
  },
  {
    valueKey: "id",
    descriptionKey: "name",
    field: "slt2",
    data: loadSlt2Data,
  },
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt3",
    data: loadSlt3Data,
  },
];

function loadSlt1Data(): Data {
  return [
    { description: "users", value: "users" },
    { description: "comments", value: "comments" },
  ];
}

function loadSlt2Data(selecteds: Record<string, any>): Promise<Data> {
  const slt1 = selecteds["slt1"];
  return searchFor(`https://jsonplaceholder.typicode.com/${slt1}`);

  async function searchFor(url: string) {
    const resp = await fetch(url);
    return await resp.json();
  }
}

function loadSlt3Data(selecteds: Record<string, any>): Data {
  const slt1 = selecteds["slt1"];
  const slt2 = selecteds["slt2"];
  if (slt1 !== "users") return [];
  if (!slt2) return [];
  return [{ value: "male" }, { value: "female" }];
}