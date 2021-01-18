### 每日一题

空间复杂度  时间复杂度
枚举
递归 自相似 数据类型结构是一致的 树 
基本排序
基本查找

怎样养成思维 结果(目的)  如果要这个结果 步骤
1 结果是什么
2 步骤是什么
3 判断的标准是什么 面试官 是不是最优 

化繁为简
拆分  大问题拆两半  循环小部分 
举一反三  其实就是类似的问题


- 位运算 一个字节，转换成二进制  3|4  
int 4个字节  1 01  2^32-1  long int short int 
  二进制 1+1 = 10 
  0111
  0111
  01110
parseInt(111,2)   7  
parseInt(1110,2)  14
- 双指针技巧 指针主要的是指向的位置 基于单链表
  - 快慢指针  链表中的问题  是否是一个环  快指针和慢指针 指向的位置相等 根据不同的需要设置不同的步数 [有共同的起点]
      - 线性结构中的环 前期和后继 (树是非线性结构) 
        P块 2  P慢 1  P快 = p慢  或者是 p块到了head== null   
        初始条件  结束条件
        ```js
        hasCycle(listNode){
          if(listNode.next!==null){
            listNode = listNode.next
          }
          return false
        }
        ```
      - 链表中的中点 链表的长度是动态的
        快指针前进两步  慢指针前进一步  快指针到链表的尽头 慢指针就处于链表的中间位置  O(n/2)
      - 链表中[倒数]的第k个元素
        快满指针，快指针[先走k步]，然后快慢指针开始[同速前进]，快指针到链表末尾null, 慢指针所在的位置就是第k个链表节点 

  - 左右指针 
    `不同的起点 一个指针指向开始，一个指针指向结尾`
    `中间向两边走 不用的方向`
    数组或者字符串的问题  二分查找 双向链表
    终止条件： 中间相遇
    - 中位数
    - 判断回文 ABCDCBA  ABCCBA
    - 二分查找
      有排序的数组 可以存在`负数`
      - 两数只和 双指针  hsahMap 
      - 反转数组 首位指针交换位置
    - 滑动窗口 和快慢指针类似 规定一个区间 处理区间当中的值
      适用于 找子串 高效的去找位置  本身不提供解决性能，只是一个方向
  双指针主要用于数组遍历，两个指针指向不同的元素，从而协同完成任务，也可以延伸到多个数组的多个指针
  若两个指针指向[同一数组]，遍历方向[相同]且不会[相交]，则称之为[滑动窗口],经常用于[区间搜索] 
  若两个指针指向[同一数组]，遍历[方向相反]，则可以用来进行搜索，待搜索的数组往往是[排好序]的
  
最常见的算法范式
- 暴力破解法
  冒泡排序
  选择排序
  顺序查找
  暴力字符串匹配
- 分治发 
  分解
  解决
  合并
  合并排序
  快排
  二分查找
    二分查找也被称为二分法或者折半查找，每次查找时通过将待查找区间氛围两部分并且只取一部分继续查找，将查找的复杂度大大减少，对于一个长度为O(n)的数组，二分查找的时间复杂度为O(logn)
    举例来说，给定一个[排好序的数组]{3,4,5,6,7} 我们虚妄查找4 在不在这个数组内，第一次折半查找的5，5大于4，如果4在数组内，则在数组的左一半，于是查找的区间变成了{3,4,5} 根据刷题习惯，可以保留5，也可以不保留5 第二次折半则考虑新的中位数4 ，正好是查找的数据，于是发现，长度为5的数组，我们只进行了2次查找，如果是遍历数组，最坏的情况也是需要查找5次
    具体到代码，二分查找是区间的左右端取开区间还是闭区间大多数时间都可以，因此，有一些初学者会容易搞不清楚如何定义区间开闭性，这里有两个小技巧 尝试熟练使用一种写法，比如左闭右开(满足c++ python的写法) 或者左闭右闭 便于处理边界条件 尽量保持一种写法，第二在刷题时如果最后一个区间只剩下一个数或者是两个数，自己写法时候会陷入死循环，如果某种写法会陷入死循环，则考虑尝试另一种写法
    二分查找 也可以看作是双指针的一种特殊情况，但是一般会将二者区分 双指针的类型的题，一般会将二者区分，双指针类型的题 指针通常是一步一步的移动，而在二分查找里，指针每次移动半个区间长度
- 动态规范 全部最优
- 贪心算法 找零钱 局部最优
- 回溯法
- 分支界限法



数组创建一个length长度确定的数组
内存泄漏

数组 读写功能 增删改查
计算机中操作细节 静下心来推演细节
字典 
对象的嵌套 不是链表
链表中每一个节点都是单独的，不是从属关系 单链表
k 和引用的值 指向的位置，引用的位置  而不是真是的{}
```js
// 这种方式不是正确的链表
{
  name:'a1';
  value:{
    name:'a2';
    value:{
      name:'a3'
    }
  }
}
const ListNode=(node)=>{
  this.value= node;
  this.head = null;
}

const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.head = node2;
```

数据结构写 断链 替换数据
头节点 尾节点 null
首节点后面 尾节点前面 倒数第二个 第二个 需要处理的什么  边界的处理

回溯 往前走一步  回溯的步数是有限的 回溯是有快慢指针的


`需要补充的是用js  趋势线基本的数据结构`

完全二叉树 和链表有什么区别么
组合  表头和一个线性表

去重 剪枝 

hashMap 复杂度为O(1) 操作有限次

表驱动
先初始化表 map hashMap.set(key,value)
hashMap get 
key value 是一个方法 需要写好

表驱动 不需要写好多if else 
字典的方式

桶排序 唱票



顺序：
Math
  - 七进制数  转7进制 或者是2进制  %7 /7 
  - 阶乘后的零 2*5 判断有多少个5的因子
  - 字符串相加 如果字符串过大，超过number 范围  此时需要的是满10进一 然后相加
  - 3的幂  y = 3^x  x=log3y log10y/log103 % 3  
  - 打乱数组 洗牌算法 
  - 按权重随机选择 需要随机生成一个随机数 是否落在某个区间 区间是权重的区间
  - 除自身以外的数组的乘积  不能使用除法  左区间和右区间 相乘 记录中间的一个数字
  - 链表随机节点  蓄水池算法
  - 快乐数  快慢指针 判断是否是循环  和链表的环相似
  - 最少移动次数使元素相等   中位数 快排  所有的数据减去中位数之和
  


  

    
