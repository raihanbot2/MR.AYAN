/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Suhao",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = [".  •xan'𝙨 \n\n Seএক্স করতে 𝙅𝙖𝙗𝙖_🐰😚🍫",
"•ঝা_ং- দু-দু টিপে দিবা...! 🙊😇\n\nআহো ঝাং, গুতা দিমু নি- আস্তে করে- তুমার চিপাই ",
"যদি ও মেয়েটা বস্তির🐼🍒 \n\nবাট 𝗽𝗼𝗺 𝗽𝗼𝗺 গুলো অস্তির.",
"নেইমারের বউ  পোস্ট দিছে. 😇\n\nভাতার আমার কাতার গেছে\n\n7up🍸 আনিতে.! 🤣🐸",
"তোমারে আগানে বাগানে \n\nবাকিটা বললাম না 🐸.",
"••🐰'\n\n- হেইইইইইইইইইই👀আন্টির মেয়ে✌✌\n\n- 𝗗𝗼 𝗬𝗼𝘂  পিরিত মি...??🙈\n\n👉🏻😼👈🏻",
"-রবীন্দ্রনাথ চাইলে..!☺️\n\n-সুভার সাথে প্রতাপের প্রেম করিয়ে দিতে  \n\nপারতেন কিন্তু দেননি.. 🙃\n\n-আসলে সবাই সার্থপর.. 😁",
"「 .\n\n - জান্স😜\n\nআমি তোমার ডেইলি উহ আহ শব্দের কারণ হতে চাই🫣 .\n\n 」",
"•\n\n𝗢𝗶𝗶 আন্টি\n\n- তোমার Maye আমার সাথে করে না কেনো,•••🥺😩💦😒\n\n•° প্রেম 🥵",
"•••\n\nমেয়ে বেষ্টফেন্ড মানে প্রাথমিক স্ত্রী!🫣\n\n•••",
"「 বান্ধবীকে জড়িয়ে ধরলে😁 \n\n ডিপ্রেসশন কমে যায় 💁‍♂️ 」",
"「 বন্ধুর বউকে জড়িয়ে ধরলে 😁 \n\n মনের দুঃখ কমে 😁💁‍♂️ 」 ",
" -আসো জান্স 💁‍♂️ \n\nএকটু প্রেম করি😁",
"💁‍♂️ এই ভুবনে ভালবাসা বলতে কিছুই নেই💁‍♂️\n\n সবই মুতার জায়গায় গুতা দেওয়ার ধান্ধা 😁",
" কেউ কারো নই🙂\n\nশুধু প্রয়োজন🙆",
"মেয়েদের জন্য হাত কাটবো কেন?😶‍🌫️\n\n 🦜নুনু কাটছি এটাই অনেক🤩🐻",
" জান্স আসো😁 \n\nএকটু টিপে দিই💁‍♂️",          
"ভালোবাসি বলতে পারি নাহ্☺️💔\n\nএমন ছেলে গুলো আমার বসের এর মতো💁‍♂️😐",
"  চুম্মা মুক্ত ঠোঁট  আমার 🤟",
"- মিম ডিম আন্ডা,,, 🐣\n\nমিমের সাথে প্রেম করে সব ছেলে ঠান্ডা! 😹😹😹\n\nকেসা লাগা মেরা কাভিতা! 😁",
"- ছেলেদের ছ্যাঁকা দিস না বইন.!💔\n\n- বিড়ির প্রচুর দাম.!🐸😔\n\n😁",
"সাপের বৈজ্ঞানিক নাম \n\nEx 🐍",
".\n\n- আচ্ছা প্রেমের সাগরে  কি পাঙ্গাশ মাছ পাওয়া যায়।☺️😁🙈\n\n.",
"-এই শীতে,নারিকেল তেলটাও জমে যায়😌\n\n-শুধু আমার সাথে এই গ্রুপের মেয়েদের সাথে প্রেম জমে না..🙂🤦‍♂️",
"-----এক নারীতে আসক্ত থাকা পোলাপান \n\n __এখন সবগুলো গাঁজাখোর 💔🥀",
"ধূমপান নয় 🚬 \n\nবান্ধবীর  দু*ধ পান করুন-!💦🍼🥵",
"পমপম is REAL. \n\nপমপম খাবা জান",
"°\n\n_না কেউ পটে না কেউ পটায়!🥺💦👅🙈\n\n°",
"  চুম্মা মুক্ত ঠোঁট  আমার 🤟",
"°\n\n__হুদাই অনলাইনে আছি_🥺🐸\n\n__কেও নক দিয়ে বলে না ভালোবাসি..🥺🥺\n\n°",
"তোমাকে চুসে চুসে খাওয়া \n\nfeeling হচ্ছে জান্স uff🫰🙈.",
"  - ঝাং’স সেক্স করবা? 🥵🙈🐸💦",
"「...°~ ষুধির ভাই 💁‍♂️\n\nতোমরা কি শুধু আমাকে দেখতে গাও~...」",
"- আমারে অশ্লীল কছ-! \n\nবাথরুমে গিয়া তো তুই ও ন্যাংটা হছ 😾👀-!?",
"~এতো লম্বা রাত দিয়ে কি করবো,!🙄 \n\nযদি বউ--ই না থাকে..!🥺",
"💦\n\nweather সবার জন্য রোমান্টিক হয় না.!'💔\n\n💦",
             "পাক্বা প্রেমের বয়স চলতাছে ! 🥹🫣."];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/2SpW29dy/received-634548805067013.jpg",
"https://i.postimg.cc/TY82SK12/received-858140621867231.jpg",
"https://i.postimg.cc/hvVng0vD/received-477835107458143.jpg",
"https://i.postimg.cc/vTvQfzsP/received-635906151580088.jpg",
"https://i.postimg.cc/cJFmFKRX/received-910940216753042.jpg",
"https://i.postimg.cc/Bngcv8V4/received-509112904140376.jpg",
"https://i.postimg.cc/SNbW770m/received-789369179151125.jpg",
"https://i.postimg.cc/4N1h6Db1/received-1847268208939431.jpg",
"https://i.postimg.cc/tJp47gfG/received-8257649397610891.jpg",
"https://i.postimg.cc/N0Xs4Tvw/received-3272691216279260.jpg",
"https://i.postimg.cc/N0Xs4Tvw/received-3272691216279260.jpg",
"https://i.postimg.cc/SNjpd8ct/received-1267833867387770.jpg",
"https://i.postimg.cc/fR4gd0Cd/received-629266395538893.jpg",
"https://i.postimg.cc/Vvx4X3qw/received-864539228039221.jpg",
"https://i.postimg.cc/gkyBv2TB/received-504073361610351.jpg",
"https://i.postimg.cc/P5XpqSDF/received-647659786739090.jpg",
"https://i.postimg.cc/Hkqq2ht6/received-478044174293238.jpg",
"https://i.postimg.cc/jSPgsdzh/received-710333823771471.jpg",
"https://i.postimg.cc/ZK32qcm3/received-490978246380229.jpg",
"https://i.postimg.cc/RFkGrkNY/images-17.jpg",
"https://i.postimg.cc/Nff2sNmC/images-18.jpg",
"https://i.postimg.cc/9MLVJB0z/images-19.jpg",
"https://i.postimg.cc/1zCsKHfX/images-20.jpg",
"https://i.postimg.cc/c1fPxh03/Sunny-new-cover-copy.jpg",
"https://i.postimg.cc/1tswpyVs/images-21.jpg",
"https://i.postimg.cc/CMZkkrzZ/images-22.jpg",
"https://i.postimg.cc/5jdxC2jm/images-23.jpg",
"https://i.postimg.cc/3ND8NvrR/images-24.jpg",
"https://i.postimg.cc/zBQDqjr6/images-25.jpg",
"https://i.postimg.cc/s2vttT6y/received-415920753892099.jpg",
"https://i.postimg.cc/cC47bbhB/received-813057360018564.jpg",
"https://i.postimg.cc/GpwFC2z2/received-652203009797061.jpg",
"https://i.postimg.cc/sxQxxPgR/received-1821877508204538.jpg",
"https://i.postimg.cc/rwCmDwMz/images-6.jpg",
"https://i.postimg.cc/HnZLDQ6r/received-643183770627455.jpg",
"https://sv3.anh365.com/images/2022/06/24/284f889dd13953ec120629f57bf8c295.jpg",
"https://sv3.anh365.com/images/2022/06/24/84617a39c614c55e3444c79cc6ffdd32.jpg",
"https://sv3.anh365.com/images/2022/06/24/5848098ef7f4c1eb87d161a913b1e29f.jpg",
"https://sv3.anh365.com/images/2022/06/24/424b7e5459ed7fa5c7c90a142976151d.jpg",
"https://sv3.anh365.com/images/2022/06/24/d88a78a3ec861d171fd2ce55d3fe9b19.jpg",
"https://sv3.anh365.com/images/2022/06/24/28deff953412ffe99b1ab99cbd89e5d7.jpg",
"https://sv3.anh365.com/images/2022/06/24/df8c199cfa83a1a6bb22e43c8a2aaf77.jpg",
"https://sv3.anh365.com/images/2022/06/24/1aa05aac8c9f88daa372f8ad36d39213.jpg",
"https://sv3.anh365.com/images/2022/06/24/12dcb182e5ec3c843891325efabf5153.jpg",
"https://sv3.anh365.com/images/2022/06/24/81939570c1617dd4d437c5b79b2522b6.jpg",
"https://sv3.anh365.com/images/2022/06/24/d08a724f2e1b833325f911e0f770e2e5.jpg",
"https://sv3.anh365.com/images/2022/06/24/623a625571803a05ac49c94916b5c70d.jpg",
"https://sv3.anh365.com/images/2022/06/24/1924de513afda9bca206a8f949277827.jpg",
"https://sv3.anh365.com/images/2022/06/24/343f6a08e5e915e7dcceca357644c5cc.jpg",
"https://sv3.anh365.com/images/2022/06/24/e35c54002a1334b0d30a8f86b0dba232.jpg",
"https://sv3.anh365.com/images/2022/06/24/d9cbf38f924c3f6f597d98198430c4fb.jpg",
"https://sv3.anh365.com/images/2022/06/24/9ed719e65ddcb5ebf5b6b072a6d8d1a8.jpg",
"https://sv3.anh365.com/images/2022/06/24/e4569a562c485f4700c940931637b96d.jpg",
"https://sv3.anh365.com/images/2022/06/24/a0f2226136a58ffcf7a0915d1dacf026.jpg",
"https://sv3.anh365.com/images/2022/06/24/31b83557fd8134de4f0114bfb801456e.jpg",
"https://sv3.anh365.com/images/2022/06/24/d5af6905e267110f75cfb498d3ddc1c0.jpg",
"https://sv3.anh365.com/images/2022/06/24/4eb2a018de0892a119ccbeed3522b404.jpg",
"https://sv3.anh365.com/images/2022/06/24/325a80fe43e586da0d1a44eb4af29755.jpg",
"https://sv3.anh365.com/images/2022/06/24/90a5618a7970f342d04486cd0d66e163.jpg",
"https://sv3.anh365.com/images/2022/06/24/a23a46183618d32d5939c6e147bb52f1.jpg",
"https://sv3.anh365.com/images/2022/06/24/5d36cfe02bafb86c2b40186de23b02fd.jpg",
"https://sv3.anh365.com/images/2022/06/24/6d4ab78c25b17c9c80306ebdd610c861.jpg",
"https://sv3.anh365.com/images/2022/06/24/cc325242b8bd6c4b9274af7098962132.jpg",
"https://sv3.anh365.com/images/2022/06/24/8cda579b106a29bc43e658b3d6f76de9.jpg",
"https://sv3.anh365.com/images/2022/06/24/70843832d8bb7f2851b8e329df51fe39.jpg",
"https://sv3.anh365.com/images/2022/06/24/822e94eab2ec5ce486e8e09fa50c4933.jpg",
"https://sv3.anh365.com/images/2022/06/24/4416bc0c7039559c4d83cbf479bf25f8.jpg",
"https://sv3.anh365.com/images/2022/06/24/0a86f5b46f6c3249fe98a18292a16cd0.jpg",
"https://sv3.anh365.com/images/2022/06/24/841f28f4ae3c0b9fdf6c252853ac3433.jpg",
"https://sv3.anh365.com/images/2022/06/24/83c01b2b357bd493780cc779b3dfa383.jpg",
"https://sv3.anh365.com/images/2022/06/24/c8f7e8f2eeb0dd9aa26329156851203a.jpg",
"https://sv3.anh365.com/images/2022/06/24/3c2adbccbb92f28142d67f4bc2927b6a.jpg",
"https://sv3.anh365.com/images/2022/06/24/dd856c28b95a088207d75dbd0850735d.jpg",
"https://sv3.anh365.com/images/2022/06/24/19910c00bba4fd9cf0991c1bd4c8379a.jpg",
"https://sv3.anh365.com/images/2022/06/24/31f3e6ad8bf09c5a29514a31ce96f7bb.jpg",
"https://sv3.anh365.com/images/2022/06/24/d8e6a359cb3ffe996ffb59069e733a47.jpg",
"https://sv3.anh365.com/images/2022/06/24/c9374ce4d4790a944f3e622efafe5034.jpg",
"https://sv3.anh365.com/images/2022/06/24/7e5ad61fe71c2f538e748ee3d68a9866.jpg",
"https://sv3.anh365.com/images/2022/06/24/fb2d25ebecbce887a74244a87d905f2b.jpg",
"https://sv3.anh365.com/images/2022/06/24/0183eaf014efaf22f65969e039f02983.jpg",
"https://sv3.anh365.com/images/2022/06/24/ae02ebf11b6624c518fd75bcca43013b.jpg",
"https://sv3.anh365.com/images/2022/06/24/24fe5ecc860d9ccb74d84170d9637ffd.jpg",
"https://sv3.anh365.com/images/2022/06/24/d2b53e05d6a1b39c4dc9eca5d1b9cfce.jpg",
"https://sv3.anh365.com/images/2022/06/24/04492f7467221e65a9b92694492841d3.jpg",
"https://sv3.anh365.com/images/2022/06/24/862ab80a2a2ab94186374442f924fea1.jpg",
"https://sv3.anh365.com/images/2022/06/24/e048d30cd9a124447486eb8a5ffc0f39.jpg",
"https://sv3.anh365.com/images/2022/06/24/8f606877690815861ccfaed8bffc6964.jpg",
"https://sv3.anh365.com/images/2022/06/24/7a5b81741e0b5b49e2fe4229ffe548a1.jpg",
"https://sv3.anh365.com/images/2022/06/24/470cb3829e8064d30f249fa458968805.jpg",
"https://sv3.anh365.com/images/2022/06/24/f0addec0c01ca645392c81220a936d33.jpg",
"https://sv3.anh365.com/images/2022/06/24/e9c31296af8587cc3643950950ecc611.jpg",
"https://sv3.anh365.com/images/2022/06/24/37e452d8dbc07077b33feb5dbfd84a3a.jpg",
"https://sv3.anh365.com/images/2022/06/24/15873f2464e01847570e7d5853bce1db.jpg",
"https://sv3.anh365.com/images/2022/06/24/df5c1b8534148c0a326f2f0badda6ab4.jpg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
