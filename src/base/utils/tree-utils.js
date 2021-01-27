export const ID = "id";
export const PARENT_ID = "parentId";
export const CHILDREN = "children";
export const PARENT = "parent";
export const PARENT_ID_VALUES = ["0", "1"];

export function list2Tree(list) {
  if (!list || !list.length) {
    return [];
  }
  const copyList = list.slice(0);
  const tree = [];
  for (let i = 0; i < copyList.length; i++) {
    // 找出每一项的父节点，并将其作为父节点的children
    for (let j = 0; j < copyList.length; j++) {
      if (copyList[i].parentId === copyList[j].id) {
        if (!copyList[j].children) {
          copyList[j].children = [];
        }
        copyList[j].children.push(copyList[i]);
      }
    }
    // 把根节点提取出来，parentId为null的就是根节点
    if (PARENT_ID_VALUES.includes(copyList[i].parentId)) {
      tree.push(copyList[i]);
    }
  }
  return tree;
}
