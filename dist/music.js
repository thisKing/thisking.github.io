const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "盗将行",
        artist: '花粥 / 马雨阳',
        url: 'https://m7.music.126.net/20210228194708/99eb92dc5013d35b96b57c69f1b17b34/ymusic/07fa/a2a1/35ea/732937117d6d0a8c13a81bb40184662e.mp3',
        cover: 'https://p3.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg?param=90y90',
      },
      {
        name: '月半小夜曲',
        artist: '李克勤',
        url: 'https://m7.music.126.net/20210228195317/b06f38afb19ebbf344773e19dfadbbc4/ymusic/fc61/296f/9010/880e30c3e11866bf98f24105fbcec127.mp3',
        cover: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=74766790705099&auth=c41f4b5675ec16c0a48c7b1eb9e8fdfd108a7e81',
      },
      {
        name: '孙大剩',
        artist: '白亮 / 赵静',
        url: 'https://m8.music.126.net/20210228195405/b696c44f6ed516a7c3d53ed83caafaf1/ymusic/e296/da1f/8907/612d0532f1c8fa22297b2270835b0e54.mp3',
        cover: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163005769076&auth=e1d85f8b3ede642836892754b8a8b58b4dc65cc1',
      },
      {
        name: '钟无艳',
        artist: '谢安琪',
        url: 'https://m8.music.126.net/20210228194924/89e6b7c81a01f641bd788520b36c20d2/ymusic/32f7/cc71/dbc9/09af651475597148f47bc7dbcc03e64a.mp3',
        cover: 'https://p3.music.126.net/e7y_BaALO6o0uM6I-mc5zw==/109951165206845950.jpg?param=90y90',
      }
    ]
});