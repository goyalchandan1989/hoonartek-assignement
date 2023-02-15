const Assignment2 = () => {
  const findDuplicate = () => {
    const arr = [10, 20, 10, 10, 20, 40, 80, 30];

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
      if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1);
      } else {
        map.set(arr[i], 1);
      }
    }

    const result = [];
    for (let [key, value] of map.entries()) {
      result.push({ [key]: value });
    }

    return result;
  };

  return <div>{JSON.stringify(findDuplicate())}</div>;
};

export default Assignment2;
