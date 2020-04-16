<template>
  <div>
    find:{{res}}
  </div>
</template>

<script>
export default {
  name:'Find',
  data () {
    return {
      sum: 0,
      res: [],
      i: 0,
      j: 1
    }
  },
  methods:{
    // twoSum(nums, target) {
    //   let i = this.i
    //   let j = this.j
    //   for(i = 0; i < nums.length-1; i++){
    //       for(j = 1; j<nums.length; j++){
    //         console.log(nums,target,i,j)
    //           this.sum = nums[i] + nums[j]
    //           if(this.sum == target){
    //               this.res.push(i)
    //               this.res.push(j)
    //               console.log(this.res)
    //               return this.res
    //           }
    //       }
    //   }
    // }
    twoSum(nums, target, i = 0, maps = {}) {
	    const map = maps
        if(map[target - nums[i] ] >= 0 ) {
            console.log([ map[target - nums[i] ], i])
        } else {
            map[ nums[i] ] = i;
            i++;
            if(i < nums.length){
                return this.twoSum(nums, target, i, map)
            } 
        }
	  }
  },
  mounted:function(){
    this.twoSum([3,3],6)
  },
  destroyed:function(){
    console.log('find销毁')
  }
}
</script>

<style scoped>

</style>