function truthCheck(collection, pre) {
    // Check if every element of collection has the property pre
    return collection.every((e) => e[pre]);
}
