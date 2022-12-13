function renameFiles(arr){
  let dupCount, newName;
  arr.forEach((item, index) => {
    dupCount = arr.filter(x => x == item).length;
    if (dupCount > 1) {
      for(n = 0; n < dupCount;){
        do {
          newName = `${item}(${n+=1})`;
        } while (arr.includes(newName));
        arr[arr.indexOf(item)] = newName;
      }
    }
  });
  return arr
}

let arr = ['blank', 'blank', 'blank']

// returns ["blank(1)","blank(2)","blank(3)"] 
renameFiles(arr)