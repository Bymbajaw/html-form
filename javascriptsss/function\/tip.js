let nums = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
console.log(nums);
for(let i = 0; i < nums.length; i++){
    if((i+1 < nums.length) && nums[i]> nums[i+1]){
    let swap = nums[i];
    nums[i] = nums[i+1];
    nums[i + 1]= swap;
    i++;
    }
}
console.log(nums)