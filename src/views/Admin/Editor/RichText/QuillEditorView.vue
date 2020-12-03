<template>
  <div class="editor">
    <a-button type="primary" @click="html2md('wechat')">
      微信
    </a-button>
    <a-button type="primary" @click="html2md('juejin')">
      掘金
    </a-button>
    <a-button type="primary" @click="html2md('zhihu')">
      知乎
    </a-button>
    <a-button type="primary" @click="html2md('csdn')">
      CSDN
    </a-button>
    <a-textarea :value="html" placeholder="HTML" :rows="1" />
    <a-textarea :value="md" placeholder="Markdown" :rows="1" />
    <quill-editor :html="html"></quill-editor>
  </div>
</template>

<script>
import QuillEditor from "../../../../components/Editor/RichText/QuillEditor";
import { htmlTomd } from "../../../../utils/sitdown-utils";
// import { DEFAULT_EDITOR_STYLE_CONFIG } from "@components/Editor/RichText/WangEditor/wangeditor-utils";

export default {
  name: "QuillEditorView",
  components: {
    QuillEditor
  },
  data() {
    return {
      md: "",
      html2: `<div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text"><h3>1、过于求急，追求立竿见影的效果的人</h3><blockquote>这类人深陷「学习差」的泥潭，长久忍受父母责骂、老师忽视或同学嘲笑后，暗自决定要逆袭。作为行动派的他们，把一切时间都花在学习上，恨不得成为不吃不睡只学习的机器人，创造「今天熬夜复习，明天考试第一」的奇迹。<br>但是，一旦发现努力没有回报，成绩迟迟不见长进，就开始闷闷不乐，垂头丧气，甚至自暴自弃。</blockquote><p><b>破解：</b></p><p><b>放平心态，别想一口吃成个胖子。学习就像细水长流，要稳扎稳打，才能有条不紊地进步。</b></p><p>过于渴望提高成绩，可能反而会因为焦虑、暴躁、压力，而影响自身的学习。</p><p>不如，先定个小目标，每次考试比之前进步1名，一个学期下来你就会发现，成绩可能到了之前不敢想的高度。</p><p class="ztext-empty-paragraph"><br></p><h3>2、思维固化导致否定自己，或者故步自封的人</h3><blockquote>这类人对自己缺乏信心，长久以来的「坏成绩」和负面反馈，导致他们思维固化：<b>我天生就蠢笨，怎么努力都学不好，我注定没出息</b>。</blockquote><p><b>破解：思维决定心态，心态决定成绩。</b>如果你认定自己是扶不上墙的学渣，那么别人再怎么帮你，你依旧变不成学霸。</p><p>学会打破固定思维，不要认定死理，学会灵活思维。平时可以玩玩活跃思维的益智小游戏，比如数字游戏、华容道等。<b>还可以试试挑战类小游戏，比如5秒内猛戳屏幕30下，这个一般人都挑战不成功。</b></p><p>其实，绝大部分人的学习，还远远没到拼智商的程度，<b>只要「努力+正确的学习方法」，成绩一定会蹭蹭蹭往上涨！</b></p><p class="ztext-empty-paragraph"><br></p><h3>3、「看书5分钟，准备2小时」，过于重视准备工作的人</h3><blockquote>这类人总觉得「万事齐全」了才有资格学习，查阅各种备考攻略、如何认真学习、如何做好笔记等等，结果花大量时间，搜集了一堆资料和方法，真正学习的时间反倒减少了。</blockquote><p>破解：学习就像「抢红包」，讲究干脆利落，直奔目标。</p><p>所以，<b>尽量减少复杂而耗时的前提工作，过于花里胡哨，反而影响学习。</b></p><p class="ztext-empty-paragraph"><br></p><h3>4、不懂就问，一做就废，不知道主动思考的人</h3><blockquote>这类人看起来很勤勉爱学习，不论是办公室的任课老师身边，还是教室里的学霸周围，总有他们问「为什么」的身影。<br>但他们的问题，往往又很简单且基础，一般只知道问答案是什么，不知道将问题和答案集合起来思考，也不知道什么叫举一反三。</blockquote><p><b>破解：</b>首先，问问题前，先自己思考三遍怎么解，实在想不到再问别人。</p><p>其次，要问答案的本质是「问思路」，知道答案只是懂这一道题，清楚思路才是懂这一类题。</p><p>最后，弄懂思路后趁热打铁，付出行动，多刷几个类似的题目加深理解。</p><p>其实，不知道主动思考的本质原因，还是书读得不多，缺少深度思考的能力。</p><p>我很喜欢杨绛先生的一句话：<b>“年轻的时候以为不读书不足以了解人生，直到后来才发现如果不了解人生，是读不懂书的。读书的意义大概就是用生活所感去读书，用读书所得去生活吧。”</b></p><p class="ztext-empty-paragraph"><br></p><h3>5、从来没一个完整的学习过程，进度总卡在80%的人</h3><blockquote>老师讲题听了80%：这个我懂了。<br>解题思路在80%：这题我会了。<br>刷题刷了80%：考试没问题了。<br>结果是，成绩也只停在80%。</blockquote><p>他们的常态是：<b>明明差一点就可以做对，但每次考试都做不对。</b></p><p><b>破解：</b>不要凭眼睛做题，只有把题目从书本装进脑袋，再从脑子拿出来放在纸上，你才能知道自己的易错点在哪里，考试才能获得100%的正确。</p><p class="ztext-empty-paragraph"><br></p><h3>6、不论是历史意义还是数学公式，都只知道死记硬背的人</h3><blockquote>这类人单纯靠记忆来冲击高分，不论是什么科目的知识，都先背上几百遍再说。他们没有思维模型，不知道怎么去思考题目，也不知道有哪些记忆方法。</blockquote><p><b>破解：打破「死记硬背」模式，先理解，再背诵，准成功。</b>遵循21天记忆曲线复习，有技巧、有规律地记知识点。</p><p>再说一件有意思的事，如果尽可能地将多种联系，结合在某一件事情上，那么你对这件事的记忆就会加深。比如，给你看男女混合的二十张照片，你只会对长相特别美或丑的有印象，但如果告诉你其中某一对是夫妻，那么你记住夫妻的长相的概率会高于其他人。</p><p>所以，<b>在我们背书记忆的时候，也可以尽量建立多的联系，充分调动五官感觉，记忆效果会大大不同</b>。不信你现在就可以试试，每次看到「铁木君」的回答，就敲两下手机屏幕，听听关节撞击玻璃屏的声音，用心感受手机屏幕的震动感，这种感觉真的很独特！相信我，不出三次，你就会对「铁木君」印象深刻。</p><h3>7、只知道低头学习，为了进度而赶进度，不知道思考和复盘的人</h3><blockquote>上一章的概念还没弄懂，就跟风刷下一章的题目，学习就像一路走马观花，没有思考总结重点和难点，也不会复盘自己掌握的程度。<br>到最后通常越学越吃力，渴望跟上进度，但一直追赶不上。</blockquote><p><b>破解：宁愿落后一点，也要抽出时间来总结和反省。</b>地基稳了，才有建高楼大厦的可能，如果一味追速度，每层楼都偷工减料，那么即使建楼成功，也岌岌可危。</p><p>学习也是一样，如果基础不稳，为了赶进度每部分知识都「漏」一点，一旦积少成多，就会形成巨大的知识漏洞。更可怕的是，你还不知道漏洞的「组成部分」，想查漏补缺也无从下手。</p><p class="ztext-empty-paragraph"><br></p><h3>8、不会抓重点，花大量时间做单调重复的事的人</h3><blockquote>这类人分不清刷题和抄错题哪个更重要，不放过老师说的每一句话，通常书本上全是密密麻麻的笔记，但依旧不清楚考试的重点是什么。</blockquote><p><b>破解：不要本末倒置。</b>记大片笔记、抄错题……都是耗费时间，但收获很小的机械化事情，不值得你把珍贵的时间耗在这上面。</p><p>建议采用思维导图的方式记笔记，省时又有重点，至于错题本，可以剪下试卷（注：老师已经讲过且不会再用）上的错题，直接贴在本子上。</p><p class="ztext-empty-paragraph"><br></p><h3>9、不会输出自己的知识和学习心得的人</h3><blockquote>这类人只知道一味学习，背了大量知识点，只把学习当任务，不会自己总结重点和学习心得，一旦别人问起来，就支支吾吾不知道怎么表达。</blockquote><p><b>破解：把知识点理解透之后，转换成自己的语言，再复述一遍给别人听</b>。这有利于避免浅尝辄止，停留在知识表面。</p><p>感兴趣的同学，可以搜搜费曼学习法，依靠输出倒逼输入，效果绝对比单纯的看书好得多。</p><p class="ztext-empty-paragraph"><br></p><h3>10、过分注重细节，不关注整体的人</h3><blockquote>这类人看书学习时，不愿意错过任何细节，必须全部弄懂再进行下一步，导致经常过分沉迷细节，无法把学习的知识联合成整体来看。</blockquote><p><b>破解：但其实，知识是触类旁通的一张大网，经常看见整体布局就能猜准细节。</b>我们不能单一地学习，要让已经装进脑海的知识点建立联系，这样更有利于记忆。</p><p>比如，学习历史朝代时，可以和该时期的必背诗词联系起来，一起背诵加深记忆等等。</p><p class="ztext-empty-paragraph"><br></p><h3>11、不分区别地刷题，也不研究题目背后考察的知识点的人</h3><blockquote>赋予自己「无情的刷题机器」这个称号，以为刷的题目越多，碰见原题的几率就会越大。于是，不论是模拟题、押题还是往年真题，只要是题目就开刷，却不知道分析题目背后的知识点，结果考试还是摔得很惨。</blockquote><p><b>破解：</b>刷题的重点在于「选择性」而不是「广泛性」，要只刷那些需要自己发力攻克的题目，不然天下的题是永远刷不完的。一眼就知道是考什么知识点的，可选择性忽视。</p><p><b>重点是通过题目看清楚想考的知识点，并通过刷题熟练掌握该知识点，而不是一味地刷量计数。</b></p><p class="ztext-empty-paragraph"><br></p><h3>12、学习不专心，一边写作业一边放松（玩手机、看电视）的人</h3><blockquote>这类人通常喜欢惬意地学习，而不是「苦行僧」似的学习，或者认为自己天赋异禀，有一心二用还学得很好的能力，结果往往效率很低。<br>比如，看了半天的书，还停留在前几页，又或是自以为都懂了，但一关上书就「马什么梅」。</blockquote><p><b>破解：这完全是学习态度的问题。</b>只有当你完全投入学习时，大脑记忆才会最深刻，这时候，你的学习效率，会狂甩「一心二用」时的效率好几倍。</p><p class="ztext-empty-paragraph"><br></p><h3>13、不懂得主动找学习捷径和学习方法的人</h3><blockquote>这类人只知道闷头死读书，固执地遵循自己的那套学习方法，学习效率和成果日渐低下。<br>结果，明明是同样的知识点，你花好几个小时背下来的，学霸只花了十分钟就理解透彻，这完全是青铜和王者的差距。</blockquote><p><b>破解：很多事情都是有捷径的，尤其是学习上，有些人走的比你快，不是因为他比你勤奋，而是你的交通工具是双腿，人家的是飞机。</b></p><p>平时多观察和询问学霸是怎么看书和学习的，另外，也可以在知乎搜搜怎么高效学习、记笔记等。</p><p class="ztext-empty-paragraph"><br></p><h3>14、不会让自己喘口气，停下来适当休息的人</h3><blockquote>挑灯熬夜刷题的是他，废寝忘食看书的是他，走路飞快绝不浪费一秒钟的是他，最后考试滑铁卢的也是他。他经常会对天发问：明明我从没偷懒，恨不得一天有25个小时可以学习，为什么还是学渣？</blockquote><p><b>破解：人生和学习一样，是一场马拉松，并不是一下子拼尽全力就能赢的。</b>学习一定要劳逸结合，有合理必要的休息时间。</p><p>且不说熬夜看书刷题效率远不如白天，长期睡眠时间不够，那你的学习状态一定好不到哪里去。午休是必不可少的，即使精力很好，也最好小睡一下。时间在10-30分钟就好，不然容易进入深度睡眠，效果更差。</p><p>另外，学累了也可以采取换科目的休息方式，比如，做数学题累了就看看语文文章，或者听听英语歌等，<b>不要玩手机刷抖音，会很难再次进入学习状态。</b></p><h3>15、学习目的不单纯，假装学习的人。</h3><blockquote>经常被努力学习的自己感动到，熬夜学习、图书馆自习必定发朋友圈，然后享受清一色的「你好努力、学霸大神」等夸赞。吸引他们学习的不是知识，而是想炫耀自己很努力很刻苦的虚荣心。这样一来，即使自己成绩不好，父母家长也没理由责骂自己，毕竟自己是「刻苦学习」的乖孩子。</blockquote><p><b>破解：明白学习是为了自己，而不是别人的眼光。</b>其实，除了父母没人会关心你的成绩，你假装的努力，在别人眼里根本不算什么，到头来你也只能欺骗父母，感动自己，浪费大量时间和精力。</p><p>你可以一直假装演戏，但是结果不会陪你演。真想炫耀的话，等到成绩出来那天再炫会更爽。</p><p class="ztext-empty-paragraph"><br></p><h3>16、不能把知识结构化和系统化的人</h3><blockquote>知识的记忆点总是很模糊，每个答案都似曾相识，但又不知道具体在哪章见过。感觉背了很多书，记住了很多东西，但是真到了要考察的时候，却大脑一片空白，说不出个所以然。一句话总结，就是记住的知识很零散、单一、毫无规律，就像杂乱无章的线团，无法形成系统化的知识体系。</blockquote><p><b>破解：知识结构化和系统化很重要！知识结构化和系统化很重要！知识结构化和系统化很重要！</b>这就像我们整理衣服，一边是衣服裤子胡乱堆成小山，一边是分门别类规规矩矩存放，当你想穿某件衣服出门时，很显然更容易在第二个里面找到。</p><p>知识也是一样，将每个知识点都整理分类，按照一定的联系或者规律，放在记忆盒子里，当你需要调动某个知识点时，它也会很快速且清晰地蹦出来。</p><p class="ztext-empty-paragraph"><br></p><h3><b>17.中了以上任意一条，但是假装没看到，也不愿意改正的人。</b></h3><p class="ztext-empty-paragraph"><br></p><h3><b>18.面对别人的建议和问题指出，不管不顾先否定了再说的人。</b></h3><p>他们不会思考自己是不是真的错了，而是想别人怎么总挑我的毛病。但其实，如果别人是真的为了你好，你也有所收获的话，大可以敞开心扉，大方承认，并表示感谢，<b>一来可以彰显你的气度和素质，二来你也会建立联系，增加记忆，对收获的内容记忆更深刻，获得更多人的喜欢，比如现在为我点了赞的你。</b></p><p class="ztext-empty-paragraph"><br></p><h3><b>19.这一条不重要，主要看第18条。</b></h3></span></div>`,
      html: `<div class="rich_media_content " id="js_content" style="visibility: hidden;"> 
  <section style="display: none;" data-tools="新媒体管家" data-label="powered by xmt.cn">
   <br>
  </section>
  <section data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="font-size: 16px;color: black;padding-right: 10px;padding-left: 10px;line-height: 1.6;letter-spacing: 0px;word-break: break-word;overflow-wrap: break-word;text-align: left;font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, &quot;PingFang SC&quot;, Cambria, Cochin, Georgia, Times, &quot;Times New Roman&quot;, serif;margin-top: -10px;">
   <p data-mpa-powered-by="yiban.io" style="white-space: normal;color: rgb(62, 62, 62);font-family: -apple-system-font, system-ui, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif;font-size: 15px;letter-spacing: 0.544px;background-color: rgb(255, 255, 255);text-align: center;"><br></p>
   <p data-mpa-powered-by="yiban.io" style="white-space: normal;color: rgb(62, 62, 62);font-family: -apple-system-font, system-ui, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif;font-size: 15px;letter-spacing: 0.544px;background-color: rgb(255, 255, 255);text-align: center;"><br></p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">还记得我在上周发的<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486494&amp;idx=1&amp;sn=a17e8278bd9fc1354449f925ef990c25&amp;chksm=cea243d5f9d5cac3b0b3b55769e162363256eb7fa483997c21b62cddb4ef2d583a2bcae0ac1a&amp;token=1910196174&amp;lang=zh_CN&amp;scene=21#wechat_redirect" style="overflow-wrap: break-word;font-weight: bold;color: rgb(140, 181, 249);border-bottom: 1px solid rgb(140, 181, 249);" data-linktype="2">《V2.0 版本的 JavaGuide 面试突击版来啦！带着它的在线阅读版本来啦！》</a>这篇文章中答应手把手教大家使用 docsify 搭建一个文档类型网站不？<br></p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.933852140077821" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZ4VXl6dEP3Q5Z5lA3ufQr4FJzUqWwwsImU2vsqsMt7FHYnOM8YmdPGQ/640?wx_fmt=png" data-type="png" data-w="257" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">这篇文章 Guide 哥就手把手教大家搭建一个像下面这样的文档类型的网站，你可以用来当做项目的说明文档，也还可以当做自己专属的知识小仓库。</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.554601226993865" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZKRCPkWHNgywEK41pfbx4b1zoqlYOicLegLBpz5a1HQpicCwffnpicl3HA/640?wx_fmt=png" data-type="png" data-w="3260" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">官网教程的也很详细了，地址在这里：<span style="color: rgb(61, 170, 214);">https://docsify.js.org/#/zh-cn/quickstart</span> ，不过我的这篇教程比较贴合实际使用。</p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">下面演示的所有内容的源文件在这里：<span style="color: rgb(61, 170, 214);">https://github.com/Snailclimb/docsify-demo</span></p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">最终效果展示地址：<span style="color: rgb(61, 170, 214);">https://snailclimb.gitee.io/docsify-demo/#/</span></p>
   <h2 data-tool="mdnice编辑器" style="margin-top: 30px;font-weight: bold;font-size: 22px;border-bottom: 2px solid rgb(89, 89, 89);margin-bottom: 30px;color: rgb(89, 89, 89);"><span style="display: none;"></span><span style="display: inline-block;border-bottom: 2px solid rgb(89, 89, 89);">一.前置条件</span></h2>
   <ol data-tool="mdnice编辑器" style="margin-top: 8px;margin-bottom: 8px;padding-left: 25px;" class="list-paddingleft-2">
    <li>
     <section style="margin-top: 5px;margin-bottom: 5px;line-height: 26px;color: rgb(1, 1, 1);">
      确保自己电脑下载安装了 NPM 并且使用这个命令：
      <code style="font-size: 14px;overflow-wrap: break-word;padding: 2px 4px;border-radius: 4px;margin-right: 2px;margin-left: 2px;background-color: rgba(27, 31, 35, 0.05);font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace;word-break: break-all;color: rgb(198, 73, 128);">npm i docsify-cli -g</code>安装了 docsify-cli 这个工具 。
     </section></li>
    <li>
     <section style="margin-top: 5px;margin-bottom: 5px;line-height: 26px;color: rgb(1, 1, 1);">
      确保自己有一个 Github 账号（码云账号为非必选项，有的话更好）。
     </section></li>
   </ol>
   <h2 data-tool="mdnice编辑器" style="margin-top: 30px;font-weight: bold;font-size: 22px;border-bottom: 2px solid rgb(89, 89, 89);margin-bottom: 30px;color: rgb(89, 89, 89);"><span style="display: none;"></span><span style="display: inline-block;border-bottom: 2px solid rgb(89, 89, 89);">二.初始化项目并预览</span></h2>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">1.新建一个文件夹：<code style="font-size: 14px;overflow-wrap: break-word;padding: 2px 4px;border-radius: 4px;margin-right: 2px;margin-left: 2px;background-color: rgba(27, 31, 35, 0.05);font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace;word-break: break-all;color: rgb(198, 73, 128);">mkdir docsify-demo</code></strong></p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">2.进入文件夹并运行 docsify 初始化命令：<code style="font-size: 14px;overflow-wrap: break-word;padding: 2px 4px;border-radius: 4px;margin-right: 2px;margin-left: 2px;background-color: rgba(27, 31, 35, 0.05);font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace;word-break: break-all;color: rgb(198, 73, 128);">cd docsify-demo</code> -&gt; <code style="font-size: 14px;overflow-wrap: break-word;padding: 2px 4px;border-radius: 4px;margin-right: 2px;margin-left: 2px;background-color: rgba(27, 31, 35, 0.05);font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace;word-break: break-all;color: rgb(198, 73, 128);">docsify init ./</code></strong></p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">你会发现 docsify-demo 文件夹下面多了下面这些文件，一一为你解释一下它们是干嘛的！</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.6772388059701493" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZW1rjiabVTUhQqahib2BnFnw6aclHWVW7xPmVgDPRP1TdP1zThiaH0z10A/640?wx_fmt=png" data-type="png" data-w="1072" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">3.本地预览网站：<code style="font-size: 14px;overflow-wrap: break-word;padding: 2px 4px;border-radius: 4px;margin-right: 2px;margin-left: 2px;background-color: rgba(27, 31, 35, 0.05);font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace;word-break: break-all;color: rgb(198, 73, 128);">docsify serve ./</code> 然后访问：<code style="font-size: 14px;overflow-wrap: break-word;padding: 2px 4px;border-radius: 4px;margin-right: 2px;margin-left: 2px;background-color: rgba(27, 31, 35, 0.05);font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace;word-break: break-all;color: rgb(198, 73, 128);">http://localhost:3000/</code></strong></p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.6960556844547564" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZiaEDoSJRHEXicxJMa3C87icby0pETZNZE8opSkLiaSVJH5t1mdKQ8GvD8g/640?wx_fmt=png" data-type="png" data-w="1724" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h2 data-tool="mdnice编辑器" style="margin-top: 30px;font-weight: bold;font-size: 22px;border-bottom: 2px solid rgb(89, 89, 89);margin-bottom: 30px;color: rgb(89, 89, 89);"><span style="display: none;"></span><span style="display: inline-block;border-bottom: 2px solid rgb(89, 89, 89);">三.给我们的项目增加点颜色</span></h2>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.9227272727272727" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZQzt0KXnT3zsr16hY0UhKib3qV1joTn8JVLMC59ZjZgH4xRUENOgOXdQ/640?wx_fmt=png" data-type="png" data-w="220" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">建议 clone 一下我的仓库：<span style="color: rgb(61, 170, 214);">https://github.com/Snailclimb/docsify-demo </span>，在本地运行一下 ，这是一个比较典型的使用 docsify 搭建的网站，可以作为参考。如果你们想搭建一个不错的文档网站的话，可以在我的这个基础上去改。</p>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>3.1 修改配置文件 index.html<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">主要配置了文档网站的名字以及开启了一些配置选项。</p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;"><span style="color: #75715e;line-height: 26px;">&lt;!DOCTYPE&nbsp;html&gt;</span><br><span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">html</span>&nbsp;<span style="line-height: 26px;">lang</span>=<span style="color: #a6e22e;line-height: 26px;">"en"</span>&gt;</span><br><br><span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">head</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">meta</span>&nbsp;<span style="line-height: 26px;">charset</span>=<span style="color: #a6e22e;line-height: 26px;">"UTF-8"</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">title</span>&gt;</span>docsify-demo<span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">title</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">meta</span>&nbsp;<span style="line-height: 26px;">http-equiv</span>=<span style="color: #a6e22e;line-height: 26px;">"X-UA-Compatible"</span>&nbsp;<span style="line-height: 26px;">content</span>=<span style="color: #a6e22e;line-height: 26px;">"IE=edge,chrome=1"</span>&nbsp;/&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">meta</span>&nbsp;<span style="line-height: 26px;">name</span>=<span style="color: #a6e22e;line-height: 26px;">"description"</span>&nbsp;<span style="line-height: 26px;">content</span>=<span style="color: #a6e22e;line-height: 26px;">"Description"</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">meta</span>&nbsp;<span style="line-height: 26px;">name</span>=<span style="color: #a6e22e;line-height: 26px;">"viewport"</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">content</span>=<span style="color: #a6e22e;line-height: 26px;">"width=device-width,&nbsp;user-scalable=no,&nbsp;initial-scale=1.0,&nbsp;maximum-scale=1.0,&nbsp;minimum-scale=1.0"</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">link</span>&nbsp;<span style="line-height: 26px;">rel</span>=<span style="color: #a6e22e;line-height: 26px;">"stylesheet"</span>&nbsp;<span style="line-height: 26px;">href</span>=<span style="color: #a6e22e;line-height: 26px;">"//unpkg.com/docsify/lib/themes/vue.css"</span>&gt;</span><br><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">head</span>&gt;</span><br><br><span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">body</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">div</span>&nbsp;<span style="line-height: 26px;">id</span>=<span style="color: #a6e22e;line-height: 26px;">"app"</span>&gt;</span><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">div</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #75715e;line-height: 26px;">&lt;!--&nbsp;docsify-edit-on-github&nbsp;--&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">script</span>&nbsp;<span style="line-height: 26px;">src</span>=<span style="color: #a6e22e;line-height: 26px;">"//unpkg.com/docsify-edit-on-github/index.js"</span>&gt;</span><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">script</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">script</span>&gt;</span><span style="line-height: 26px;"><br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a6e22e;line-height: 26px;">window</span>.$docsify&nbsp;=&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">name</span>:&nbsp;<span style="color: #a6e22e;line-height: 26px;">'docsify-demo'</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">repo</span>:&nbsp;<span style="color: #a6e22e;line-height: 26px;">'https://github.com/Snailclimb/JavaGuide-Interview'</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">maxLevel</span>:&nbsp;<span style="line-height: 26px;">5</span>,<span style="color: #75715e;line-height: 26px;">//最大支持渲染的标题层级</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subMaxLevel:&nbsp;<span style="line-height: 26px;">3</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">homepage</span>:&nbsp;<span style="color: #a6e22e;line-height: 26px;">'README.md'</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">coverpage</span>:&nbsp;<span style="color: #f92672;font-weight: bold;line-height: 26px;">true</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">loadSidebar</span>:&nbsp;<span style="color: #f92672;font-weight: bold;line-height: 26px;">true</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">auto2top</span>:&nbsp;<span style="color: #f92672;font-weight: bold;line-height: 26px;">true</span>,<span style="color: #75715e;line-height: 26px;">//切换页面后是否自动跳转到页面顶部</span><br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;</span><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">script</span>&gt;</span><br>&nbsp;&nbsp;<span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">script</span>&nbsp;<span style="line-height: 26px;">src</span>=<span style="color: #a6e22e;line-height: 26px;">"//unpkg.com/docsify/lib/docsify.min.js"</span>&gt;</span><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">script</span>&gt;</span><br><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">body</span>&gt;</span><br><br><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">html</span>&gt;</span><br></code></pre>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>3.2 添加侧边栏文件<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">在第一步中，我们在已经开启了侧边栏选项：</p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;">loadSidebar:&nbsp;<span style="color: #f92672;font-weight: bold;line-height: 26px;">true</span><br></code></pre>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">但是，仅仅这样还不行，我们需要定义一个名为 <code style="font-size: 14px;overflow-wrap: break-word;padding: 2px 4px;border-radius: 4px;margin-right: 2px;margin-left: 2px;background-color: rgba(27, 31, 35, 0.05);font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace;word-break: break-all;color: rgb(198, 73, 128);">_sidebar.md</code>的文件，文件的内容就是我们侧边栏的内容。</p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">如下图所示，我们定义了一个侧边栏，并且为它添加了一些内容：</p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><em style="color: rgb(76, 156, 215);">一般建议将文档放进 docs 文件下面，可以参考我的仓库：https://github.com/Snailclimb/docsify-demo</em></p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.4261141516810008" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZJ8pfV4cdLH7OXIt8lXleI5dbZY0PXPjpBmYTquOee4sCVLpGNkncNA/640?wx_fmt=png" data-type="png" data-w="2558" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">修改完成之后，你就会发现我们的文档网站多了侧边栏，你点击侧边栏对应的内容在右边显示。</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.4317207593386405" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZE96wGmQiacA6kv5iapibUKvYfAiaj7yicZWakppT55SFVQFQPLdRyrGm63g/640?wx_fmt=png" data-type="png" data-w="3266" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>3.3 修改主页内容<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">修改 REDME.md，内容如下：</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.6533242876526458" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZU5EnYhQfyzRaBuMKlG57iaxTguNkNj2fXX7W5SEdQbKib37pvlvRDyTQ/640?wx_fmt=png" data-type="png" data-w="2948" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">然后我们的文档网站的主页就变成了这样：</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.5049079754601227" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZfrr6oNjZ6QyKQFgVLdkOZSEQOZxwsKibxxYWm7yWLlaxbvvtLjYr5wQ/640?wx_fmt=png" data-type="png" data-w="3260" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>3.4 添加一个封面<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">第一步中，我们在已经开启了封面选项：</p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;">&nbsp;coverpage:&nbsp;<span style="color: #f92672;font-weight: bold;line-height: 26px;">true</span><br></code></pre>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">为了能让我们的文档网站有封面，我们还需要新建一个名字为 <code style="font-size: 14px;overflow-wrap: break-word;padding: 2px 4px;border-radius: 4px;margin-right: 2px;margin-left: 2px;background-color: rgba(27, 31, 35, 0.05);font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace;word-break: break-all;color: rgb(198, 73, 128);">_coverpage.md</code>的文件，内容如下</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.5016972165648337" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZJgkWN94ZUK0hhf2HfqMEyx2EWt0oDsRpqk5NAsXZPicicf6lw7st50hg/640?wx_fmt=png" data-type="png" data-w="2946" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">然后，我们再打开网站的时候，就有了封面，如下图所示：</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.5248313917841815" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZpKG6rib8QG6K70iaiabBibuywUZibL3wr2DhbLXicsjvibS3k2RynmOlJnuWQ/640?wx_fmt=png" data-type="png" data-w="3262" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h2 data-tool="mdnice编辑器" style="margin-top: 30px;font-weight: bold;font-size: 22px;border-bottom: 2px solid rgb(89, 89, 89);margin-bottom: 30px;color: rgb(89, 89, 89);"><span style="display: none;"></span><span style="display: inline-block;border-bottom: 2px solid rgb(89, 89, 89);">四.一些有用的插件</span></h2>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">我下面简单介绍几个我觉得比较实用的插件，更多插件的话在这里：<strong><span style="color: rgb(61, 170, 214);">https://docsify.js.org/#/zh-cn/plugins </span></strong>。</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="1.2745591939546599" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZ0KicHpibZR3xpg627unxPdfPnIvy8XJticE6oiaw7iaSqCz1fmYiaGDBFE9g/640?wx_fmt=png" data-type="png" data-w="794" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>4.1 增加 Java 代码高亮<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">手动引入 Java 代码高亮的插件：</strong></p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;">&lt;!--Java代码高亮--&gt;<br><span style="line-height: 26px;"><span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">script</span>&nbsp;<span style="line-height: 26px;">src</span>=<span style="color: #a6e22e;line-height: 26px;">"//unpkg.com/prismjs/components/prism-java.js"</span>&gt;</span><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">script</span>&gt;</span></span><br></code></pre>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.4607594936708861" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZQqpAOpodu2icd8miaQSpqa3K0bd0XYx92icBZHaCWxNk1E0A8e7HrSB1Q/640?wx_fmt=png" data-type="png" data-w="3160" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>4.2 增加全文搜索功能<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">引入插件：</p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;">&nbsp;&nbsp;&lt;!--全文搜索,直接用官方提供的无法生效--&gt;<br>&nbsp;&nbsp;<span style="line-height: 26px;"><span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">script</span>&nbsp;<span style="line-height: 26px;">src</span>=<span style="color: #a6e22e;line-height: 26px;">"https://cdn.bootcss.com/docsify/4.5.9/plugins/search.min.js"</span>&gt;</span><br></span></code></pre>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">配置一下：</p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;">&nbsp;&nbsp;&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a6e22e;line-height: 26px;">window</span>.$docsify&nbsp;=&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #75715e;line-height: 26px;">//全文搜索</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;search:&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">maxAge</span>:&nbsp;<span style="line-height: 26px;">86400000</span>,&nbsp;<span style="color: #75715e;line-height: 26px;">//&nbsp;过期时间，单位毫秒，默认一天</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;paths:&nbsp;<span style="color: #a6e22e;line-height: 26px;">'auto'</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">placeholder</span>:&nbsp;<span style="color: #a6e22e;line-height: 26px;">'搜索'</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="line-height: 26px;">noData</span>:&nbsp;<span style="color: #a6e22e;line-height: 26px;">'找不到结果'</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #75715e;line-height: 26px;">//&nbsp;搜索标题的最大程级,&nbsp;1&nbsp;-&nbsp;6</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;depth:&nbsp;<span style="line-height: 26px;">3</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&lt;<span style="color: #bf79db;line-height: 26px;">/script&gt;<br></span></code></pre>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">然后我们的文档网站就有全文搜索功能了：</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.680921052631579" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZOQicg2nDxSiaiaUGCREBumejq47OB5s9dHvPo4tibxrEznPfTKQnazoOlA/640?wx_fmt=png" data-type="png" data-w="2432" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>4.3 复制代码到剪切板<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">引入插件即可！</p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;">&lt;!--&nbsp;复制代码到剪贴板&nbsp;--&gt;<br><span style="line-height: 26px;"><span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">script</span>&nbsp;<span style="line-height: 26px;">src</span>=<span style="color: #a6e22e;line-height: 26px;">"//unpkg.com/docsify-copy-code"</span>&gt;</span><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">script</span>&gt;</span></span><br></code></pre>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.4571159283694628" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZBFcDslOWibKBVVFVRFkFyMNQo5SaibxYw2jepqNsJo3lWPk5WVzhu0Jg/640?wx_fmt=png" data-type="png" data-w="2122" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>4.4 图片缩放和字数统计<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">引入下面两个插件即可！</p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;">&lt;!--&nbsp;图片缩放&nbsp;--&gt;<br><span style="line-height: 26px;"><span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">script</span>&nbsp;<span style="line-height: 26px;">src</span>=<span style="color: #a6e22e;line-height: 26px;">"//unpkg.com/docsify/lib/plugins/zoom-image.js"</span>&gt;</span><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">script</span>&gt;</span></span><br><span style="line-height: 26px;"><span style="color: #75715e;line-height: 26px;">&lt;!--&nbsp;字数统计&nbsp;--&gt;</span><br><span style="color: #f92672;line-height: 26px;">&lt;<span style="line-height: 26px;">script</span>&nbsp;<span style="line-height: 26px;">src</span>=<span style="color: #a6e22e;line-height: 26px;">"//unpkg.com/docsify-count/dist/countable.js"</span>&gt;</span><span style="color: #f92672;line-height: 26px;">&lt;/<span style="line-height: 26px;">script</span>&gt;</span><br></span></code></pre>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.6689761354888376" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZ1kxiahpt8qHx3kSu3AKRBtEakTHdj73K85cOQpMjCa3fghD9z6Lh64A/640?wx_fmt=png" data-type="png" data-w="2598" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>4.5 edit on github<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">做如下配置，注意修改为你自己的路径。</p>
   <pre data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZRXwfTPZa0t8Cf7rBeRViaZbGAA4Ik2TmoJVUiakNeYsj0EzEzcAHqpiaA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(39, 40, 34);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span><code style="overflow-x: auto;padding: 16px;color: #ddd;display: -webkit-box;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 12px;-webkit-overflow-scrolling: touch;padding-top: 15px;background: #272822;border-radius: 5px;">&nbsp;&nbsp;&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a6e22e;line-height: 26px;">window</span>.$docsify&nbsp;=&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;plugins:&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EditOnGithubPlugin.create(<span style="color: #a6e22e;line-height: 26px;">'https://github.com/Snailclimb/JavaGuide-Interview/blob/master/'</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&lt;<span style="color: #bf79db;line-height: 26px;">/script&gt;<br></span></code></pre>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">然后我们的每个页面都出来了 "Edit on github" 选项，你点击之后就会跳到 Github 对应的页面编辑。</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.7027243589743589" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZTF2e2yrKoCQC0lT4yWXkqZKvMRP3mctkGz4RZtYptYxoicN1sn5mdibg/640?wx_fmt=png" data-type="png" data-w="2496" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <h2 data-tool="mdnice编辑器" style="margin-top: 30px;font-weight: bold;font-size: 22px;border-bottom: 2px solid rgb(89, 89, 89);margin-bottom: 30px;color: rgb(89, 89, 89);"><span style="display: none;"></span><span style="display: inline-block;border-bottom: 2px solid rgb(89, 89, 89);">五.部署</span></h2>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>5.1 部署到 Github<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">1.Github 新建一个仓库，这一步就不说了。</strong></p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">2.把项目提交上去</strong></p>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">3.开启 Github Pages</strong></p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.2805194805194805" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZ0ic5Rwdw8s5cX8XdpYuCqbG012LAmlyEF4Ricibj95iatgkrDWicH2HdFEQ/640?wx_fmt=png" data-type="png" data-w="2310" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.6419098143236074" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZldGicJaQVHE9YtZ2jicvf5YibpBWH9ewJRw8C61lC6jaVIrk31iaT1Licdg/640?wx_fmt=png" data-type="png" data-w="1508" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">然后你的项目就能在线访问了！</p>
   <h3 data-tool="mdnice编辑器" style="margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 20px;color: rgb(89, 89, 89);"><span style="display: none;"></span>5.2 同步到码云提高国内访问速度<span style="display: none;"></span></h3>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">1.导入 Github 项目</strong></p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.7148514851485148" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZfn106UQkutTujTcP8Zh4ON5n7QZ1PeVUKNKSLgY2Pzv0e7knxIXbIQ/640?wx_fmt=png" data-type="png" data-w="1010" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);">注意把下面的是否开源勾选为公开，不然别人无法访问。</p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.8806133625410734" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZ6OBKSib8dLtGLXm4Jjic69ZPnzybfr5HMkloChCcMn4AOAu9Hia3XP0cg/640?wx_fmt=png" data-type="png" data-w="1826" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><strong style="color: rgb(71, 193, 168);">2.选择 Gitee Pages 服务</strong></p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.4896551724137931" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZM29HylOXRRUrnibLwmqnyXIpxl7MNlNbDQjZEH403Ij3GfloyibhRylQ/640?wx_fmt=png" data-type="png" data-w="2610" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
   <p data-tool="mdnice编辑器" style="padding-top: 8px;padding-bottom: 8px;line-height: 26px;color: rgb(89, 89, 89);"><img data-ratio="0.9303721488595438" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZSdBicQcI29tx2llztbLotRwicjXxOJh0fnqeFtLXyuxhFVuMMnu4eDTw/640?wx_fmt=png" data-type="png" data-w="1666" style="display: block;margin-right: auto;margin-left: auto;width: auto;"><strong style="color: rgb(71, 193, 168);">3.收获喜悦的成果</strong></p>
   <figure data-tool="mdnice编辑器" style="margin-top: 10px;margin-bottom: 10px;">
    <img data-ratio="0.5964482547458665" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TwZ606wbuuGhUo5ibWIMNNQZNyAZicXsKWo4zrSlVFYWDzSJYEhBIAdvJrOHNCiaNeZWl4eUtGfCD03Q/640?wx_fmt=png" data-type="png" data-w="3266" style="display: block;margin-right: auto;margin-left: auto;width: auto;">
   </figure>
  </section>
  <p><br></p>
  <section data-role="outer" label="Powered by 135editor.com" style="white-space: normal;color: rgb(63, 63, 63);font-size: 16px;">
   <section data-tools="135编辑器" data-id="92648">
    <section style="margin-top: 15px;margin-right: auto;margin-left: auto;">
     <section style="margin-right: auto;margin-left: auto;display: -webkit-flex;justify-content: center;">
      <section style="margin-top: -14px;padding-right: 5px;padding-left: 5px;width: 55px;background: rgb(255, 255, 255);">
       <img data-ratio="0.19718309859154928" data-src="https://mmbiz.qpic.cn/mmbiz_png/YUyZ7AOL3okNrbpwK1O7dyBzC2Plfz68uy4bVIZv9HiaianJyzmbnG37rc8RVw7HcZClFVvgeeAU7lythIgh0Ekw/640?wx_fmt=png" data-type="png" data-w="71" data-width="100%" style="width: 55px;">
      </section>
     </section>
    </section>
   </section>
   <section data-role="paragraph">
    <p><br></p>
   </section>
  </section>
  <section data-role="outer" label="Powered by 135editor.com" style="white-space: normal;color: rgb(63, 63, 63);font-size: 16px;">
   <section data-tools="135编辑器" data-id="95098">
    <section style="margin: 1em auto;">
     <section style="display: flex;justify-content: center;align-items: center;">
      <section data-width="50%" style="width: 234.328px;height: 1px;background: rgb(203, 203, 239);overflow: hidden;">
       <br>
      </section>
      <section style="margin-right: 4px;margin-left: 4px;width: 125px;">
       <img data-ratio="0.37423312883435583" data-src="https://mmbiz.qpic.cn/mmbiz_gif/7QRTvkK2qC6aqek98EtTHUKcyP8jibR2dMpmVDlnHv7DyMlWaib0sO2Qib2XtVPL8wictxAoKMch1iancskn5BpaYcg/640?wx_fmt=gif" data-type="gif" data-w="163" style="width: 125px;display: block;">
      </section>
      <section data-width="50%" style="width: 234.328px;height: 1px;background: rgb(203, 203, 239);overflow: hidden;">
       <br>
      </section>
     </section>
    </section>
   </section>
  </section>
  <p style="white-space: normal;"><br></p>
  <section data-from="xmt-recommend" data-tools="新媒体排版" style="white-space: normal;">
   <a href="http://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486536&amp;idx=1&amp;sn=5557b52d6c6cc52c937c178a8a57a3ad&amp;chksm=cea24383f9d5ca9548db06bdc1402de36c0982d26d6e525ac0a82895f5eabbc970cc56ab5901&amp;scene=21#wechat_redirect" target="_blank" data-linktype="2" style="width: 100%;">
    <section style="margin: 16px;white-space: nowrap;text-align: left;border-radius: 4px;box-sizing: border-box;overflow: hidden;box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 12px 0px;height: 154px;">
     <section style="bottom: 0px;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;width: 546px;height: 154px;">
      <section class="h5_image_link" style="font-size: inherit;display: inherit;width: 546px;height: 154px;background-size: cover;background-position: 50% center;background-image: url(&quot;https://mmbiz.qpic.cn/mmbiz_jpg/iaIdQfEric9TzUeDuLY2TbKkACicAQKZp3QK9r0iaZ2fxN4CnA4aFZ2ibl4K9L09I7dxQrrfEwMia6uTFpOmmAyQhlTw/640?wx_fmt=jpeg&quot;);z-index: -1;">
       &nbsp;
      </section>
      <section style="margin-top: -35px;padding: 5px 16px;bottom: 0px;width: 546px;box-sizing: border-box;background-color: rgba(0, 0, 0, 0.5);color: rgb(255, 255, 255);text-overflow: ellipsis;overflow: hidden;font-size: 16px;">
       逆风而行！从考研失败到收获到自己满意的Offer,分享一下自己的经历！
      </section>
     </section>
    </section></a>
  </section>
  <section data-from="xmt-recommend" data-tools="新媒体排版" style="white-space: normal;">
   <a href="http://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486526&amp;idx=1&amp;sn=5e3f08b8509db69816d9d2608f0b6e86&amp;chksm=cea243f5f9d5cae394c4746ff805ef59e195832cb6d7347e85516d4d80bbdb955fe814782543&amp;scene=21#wechat_redirect" target="_blank" data-linktype="2" style="width: 100%;">
    <section style="margin: 16px;white-space: nowrap;text-align: left;border-radius: 4px;box-sizing: border-box;overflow: hidden;box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 12px 0px;height: 154px;">
     <section style="bottom: 0px;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;width: 546px;height: 154px;">
      <section class="h5_image_link" style="font-size: inherit;display: inherit;width: 546px;height: 154px;background-size: cover;background-position: 50% center;background-image: url(&quot;https://mmbiz.qpic.cn/mmbiz_jpg/iaIdQfEric9TzUeDuLY2TbKkACicAQKZp3QLgVWWVlGhbPGRQwWJG188La9fB8GOHFp1DUPH86AGicV81beAFMCJTg/640?wx_fmt=jpeg&quot;);z-index: -1;">
       &nbsp;
      </section>
      <section style="margin-top: -35px;padding: 5px 16px;bottom: 0px;width: 546px;box-sizing: border-box;background-color: rgba(0, 0, 0, 0.5);color: rgb(255, 255, 255);text-overflow: ellipsis;overflow: hidden;font-size: 16px;">
       写给Java程序员看的多线程学习指南！
      </section>
     </section>
    </section></a>
  </section>
  <section data-from="xmt-recommend" data-tools="新媒体排版" style="white-space: normal;">
   <a href="http://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486508&amp;idx=1&amp;sn=ce2faafcde166d5412d7166a01fdc1e9&amp;chksm=cea243e7f9d5caf1dbf4d6ccf0438a1731bc0070310bba1ac481d485e4a6756349c20f02a6b1&amp;scene=21#wechat_redirect" target="_blank" data-linktype="2" style="width: 100%;">
    <section style="margin: 16px;white-space: nowrap;text-align: left;border-radius: 4px;box-sizing: border-box;overflow: hidden;box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 12px 0px;height: 154px;">
     <section style="bottom: 0px;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;width: 546px;height: 154px;">
      <section class="h5_image_link" style="font-size: inherit;display: inherit;width: 546px;height: 154px;background-size: cover;background-position: 50% center;background-image: url(&quot;https://mmbiz.qpic.cn/mmbiz_jpg/iaIdQfEric9TwyWiceRqPd2ia6c8Pg75CtWzBpZSekx7SK9Uv9sxEicCvLPLtEALYOnuvarzFkTE9BUZ5OXD67MQn2g/640?wx_fmt=jpeg&quot;);z-index: -1;">
       &nbsp;
      </section>
      <section style="margin-top: -35px;padding: 5px 16px;bottom: 0px;width: 546px;box-sizing: border-box;background-color: rgba(0, 0, 0, 0.5);color: rgb(255, 255, 255);text-overflow: ellipsis;overflow: hidden;font-size: 16px;">
       写给Java程序员看的算法学习指南！
      </section>
     </section>
    </section></a>
  </section>
  <section data-from="xmt-recommend" data-tools="新媒体排版" style="white-space: normal;">
   <a href="http://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486483&amp;idx=2&amp;sn=77be488e206186803531ea5d7164ec53&amp;chksm=cea243d8f9d5cacecaa5c5daae4cde4c697b9b5b21f96dfc6cce428cfcb62b88b3970c26b9c2&amp;scene=21#wechat_redirect" target="_blank" data-linktype="2" style="width: 100%;">
    <section style="margin: 16px;white-space: nowrap;text-align: left;border-radius: 4px;box-sizing: border-box;overflow: hidden;box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 12px 0px;height: 154px;">
     <section style="bottom: 0px;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;width: 546px;height: 154px;">
      <section class="h5_image_link" style="font-size: inherit;display: inherit;width: 546px;height: 154px;background-size: cover;background-position: 50% center;background-image: url(&quot;https://mmbiz.qpic.cn/mmbiz_jpg/0OzaL5uW2aOhsEJ0TtJSM5kcSOKZGJDOpTm4CyvMUT2EpUJ5alRxgc5xMMl3VGf0v6EWJ405iaicFurlNddlicq6g/640?wx_fmt=jpeg&quot;);z-index: -1;">
       &nbsp;
      </section>
      <section style="margin-top: -35px;padding: 5px 16px;bottom: 0px;width: 546px;box-sizing: border-box;background-color: rgba(0, 0, 0, 0.5);color: rgb(255, 255, 255);text-overflow: ellipsis;overflow: hidden;font-size: 16px;">
       一口气说出 6种 @Transactional 注解失效场景
      </section>
     </section>
    </section></a>
  </section>
  <p style="white-space: normal;"><br></p>
  <p style="white-space: normal;text-align: center;"><img class="rich_pages" data-ratio="0.45818815331010454" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9Tx5at4b0kpBf4KgrX6SicJvUp4hmAloliaSBqoDqwH0PHr2YgWUGLqibOlCKgHyawGNicU0FEh1HWIwHw/640?wx_fmt=png" data-type="png" data-w="574"><br></p>
  <p style="white-space: normal;font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, &quot;PingFang SC&quot;, Cambria, Cochin, Georgia, Times, &quot;Times New Roman&quot;, serif;font-size: 16px;letter-spacing: 0.544px;text-align: left;color: rgb(0, 0, 0);"><br></p>
  <section data-role="outer" label="Powered by 135editor.com" style="white-space: normal;font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, &quot;PingFang SC&quot;, Cambria, Cochin, Georgia, Times, &quot;Times New Roman&quot;, serif;font-size: 16px;letter-spacing: 0.544px;text-align: left;color: rgb(0, 0, 0);">
   <section data-tools="135编辑器" data-id="95172">
    <section style="display: flex;justify-content: flex-end;align-items: center;">
     <section style="display: inline-block;text-align: right;">
      <section data-brushtype="text" style="margin-bottom: -15px;color: rgb(63, 63, 63);letter-spacing: 2px;transform: rotate(0deg);">
       好文让朋友知道你“在看”
      </section>
     </section>
     <section style="width: 22px;">
      <section style="margin-top: 15px;width: 22px;">
       <img data-ratio="1.0377358490566038" data-src="https://mmbiz.qpic.cn/mmbiz_gif/7QRTvkK2qC6sLlAPcPheDLycujYrOvsZviaSODbRbQzQvW8VL1yiaGA8FTPbpObFuJibSdib3T55sJOa3QfVCyiaPcA/640?wx_fmt=gif" data-type="gif" data-w="53" data-width="100%" style="width: 22px;display: block;">
      </section>
     </section>
    </section>
   </section>
  </section>
  <p><br></p> 
 </div>`,
      wangEditor: {
        editor: null,
        editorComponentConfig: { ableEditing: true }
      }
    };
  },
  methods: {
    html2md(platform) {
      debugger;
      this.md = htmlTomd(this.html, platform);
    }
  }
};
</script>

<style></style>
