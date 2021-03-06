/**
 4 寻找两个正序数组的中位数
 类似题目 给定两个已经排序好的数组，找到两者元素中第K大的元素

 给定两个大小为m和n的正序(从小到大)数组 nums1 和 nums2
 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度 O(log(m + n)) 
 你可以假设 nums1 和 nums2 不会同时为空。

示例 1:
nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0

示例 2:
nums1 = [1, 2]
nums2 = [3, 4]
则中位数是 (2 + 3)/2 = 2.5
 */

// 归并排序

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 方法一： 使用归并排序的方式，合并两个数组，得到一个大的有序数组，中间的位置的元素，即为中位数
 时间复杂度O(m+n)
 空间复杂度O(m+n)
*/

var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length-1;
  let len2 =nums2.length-1;
  let len =len1+len2+1;
  while(len2>=0){
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
  };
  const median = ~~((nums1.length-1)/2);
  const medianNumer = nums1.length % 2 === 0 && (nums1[median] + nums1[median + 1]) / 2 || nums1[median];
  return medianNumer;
};


/**
 方法二：仅仅需要K大的元素，不需要排序这么昂贵的操作，可以使用一个计数器，记录当前已经找到的第m大的元素。同时使用两个指针pA和pB,分别指向A和B数组的第一个元素，使用类似merge sort 的原理，如果数组A当前元素小，那么pA++，同时m++；如果数组B当前元素小，那么pB++。m++，最终当m等于K
 时间复杂度O(m+n)
 空间复杂度O(1)

 如果知道奇数 （len+1）/2
 如果是偶数 len/2 len/2+1
*/

var findMedianSortedArrays1 = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const len = m + n;
  let pA = 0, pB = 0, index = 0;
  let left = null, right = null;
  let k = len / 2;
  while (index <= k) {
    left = right;
    // 边界需要处理好
    if (pA < m && (pB >= n || nums1[pA] <= nums2[pB])) {
      right = nums1[pA++]
    } else {
      right = nums2[pB++];
    }
    index++;
  }
  if ((len & 1) == 0) {
    return (left + right) / 2
  } else {
    return right;
  }
};

/**
 方法三
 找分界线需满足以下条件
 1 分界线左边数组的元素应该和右边数据元素个数相等，或者左边的元素比右边的元素多1(和为奇数)
 2 分割线左边的所有数值<=右边所有的数值
 那么中位数就一定只与红线两侧的元素有关，确定这条分界线的位置就是使用二分查找
 分割线左边元素的较大者就是中位数，分割线右边较小者就是最小的元素
 数组1长度为m,  数组2长度n
 m+n 为偶数的时候 s=(m+n)/2
 m+n 为奇数的时候 s=(m+n+1)/2  向下取整
 */

var findMedianSortedArrays2=function(nums1,nums2){
  debugger;
  if(nums1.length>nums2.length){
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let m=nums1.length;
  let n =nums2.length;
  // 总体的分界线 向下取整
  let totalLeft = (m+n+1)/2 <<0 ;

  // 左半部分的长度等于右半部分的长度
  // i+j = m-i+n-j 推导出  j= (m+n)/2 -i
  // 在nums1 的区间[0,m] 里查找适当的分割线
  // 使得nums1[i-1]<=nums2[j] && nums2[j-1]<==nums[i]
  let left = 0;
  let right = m;
  while(left<right){
    // right-left +1 如果不进行加1，则回出现闭区间是相等的，出现死循环 如果left= i+1  则不需要right-left  再加1
    // nums1 分界线
    let i = (left+right+1)/2<<0;
    // nums2 分界线
    let j = totalLeft-i;
    if (nums1[i - 1] > nums2[j]){
      // [0,i-1]
      right = i -1;
    }else{
      // [i+1,right]
      left = i;
    }
  }

  let i = left;
  let j = totalLeft - i;
  var biggestNum = Number.MAX_VALUE;
  const nums1LeftMax = i === 0 ? -biggestNum : nums1[i-1];
  const nums1RightMin = i === m ? biggestNum: nums1[i];
  const nums2LeftMax = j === 0 ? -biggestNum :nums2[j-1];
  const nums2RightMin = j === n ? biggestNum : nums2[j];

  if((m+n)%2===1){
    return Math.max(nums1LeftMax, nums2LeftMax);
  }else{
    return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin))/2
  }
}


const nums2=[3];
const nums1=[-2,-1];


console.log(findMedianSortedArrays(nums1, nums2))
