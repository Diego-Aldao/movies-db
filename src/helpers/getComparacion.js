function comparar(objectoA, objectoB) {
  if (objectoA > objectoB) {
    return -1;
  }
  if (objectoA < objectoB) {
    return 1;
  }
  return 0;
}

export default comparar;
