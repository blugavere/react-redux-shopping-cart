export function only(item, items) {
  if (item) {
    return items.filter(i => i.id === item.id)[0];
  }
  return items;
}

export function except(item, items) {
  if (item) {
    return items.filter(i => i.id !== item.id);
  }
  return items;
}