const nums = [1,2,3,4,5,6,7,8,9,10];
const part = nums.slice(4,8);
console.log("Slice : ", part);
console.log(nums);

const removed = nums.splice(2,4);
console.log("Splice : ",removed);
console.log(nums);

// removed = nums.splice(2,4, 14,16);   //14,16 are injected --- inserted
// console.log(removed);
// console.log(nums);

const together = nums.join(" ");
console.log("Joined : ",together);

// together = nums.join(" hi ");
// console.log("Joined : ",together);