// alert(1111);

$(window).on('load',function(){
  $(".start_title").fadeOut(5000);
  $(".Battle").delay(4500).fadeIn(3000);
})

// function janken(user) {

function OnButtonClick() {
    // コンピュータの選択を画像ファイル名を配列に保存
    let pcJankens = ['Maki.jpg', 'Sendo.jpg', 'Sawakita.jpg','uozumi.jpg','hanagata.jpg'];
 
    // 人が選択した画像ファイル名を配列に保存
    let userJankens = ['Hanamichi.jpeg', 'Micchi-3p.jpg', 'Rukawa.jpg','akagi.jpeg','ryota.jpeg'];
 
    // コンピュータの手を乱数(0～2）で作成
    let user = Math.floor(Math.random() * 5);
    let pc = Math.floor(Math.random() * 5);
 
    // ユーザの手の画像を表示するimgタグを検索
    let userImg = document.getElementById("userImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    userImg.src = "image/" + userJankens[user];
 
    // コンピュータの選択画像を表示するimgタグをフォルダから検索
    let pcImg = document.getElementById("pcImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    pcImg.src = "image/" + pcJankens[pc];
 
    // 勝敗を表示
    let result = [['ファール！', 'Win', 'Lose','バイオレーション','Draw'],
                  ['Lose', 'ファール！', 'Win','バイオレーション','Draw'],
                  ['Win', 'Lose', 'ファール！','バイオレーション','Draw'],
                  ['Win', 'Lose', 'バイオレーション','ファール！','Draw'],
                  ['Win', 'Lose', 'バイオレーション','Draw','ファール！'],
                  ['Win', 'Lose', 'Draw','ファール！','バイオレーション'],
                  ['Win', 'Lose', 'Draw','バイオレーション','ファール！'],
                  ['ファール！', 'Win', 'Lose','バイオレーション','Draw'],
                  ['Lose', 'ファール！', 'Win','バイオレーション','Draw'],
                  ['Win', 'Lose', 'ファール！','バイオレーション','Draw'],
                  ['Win', 'Lose', 'バイオレーション','ファール！','Draw'],
                  ['Win', 'Lose', 'バイオレーション','Draw','ファール！'],
                  ['Win', 'Lose', 'Draw','ファール！','バイオレーション'],
                  ['Win', 'Lose', 'Draw','バイオレーション','ファール！'],
                  ['ファール！', 'Win', 'Lose','バイオレーション','Draw'],
                  ['Lose', 'ファール！', 'Win','バイオレーション','Draw'],
                  ['Win', 'Lose', 'ファール！','バイオレーション','Draw'],
                  ['Win', 'Lose', 'バイオレーション','ファール！','Draw'],
                  ['Win', 'Lose', 'バイオレーション','Draw','ファール！'],
                  ['Win', 'Lose', 'Draw','ファール！','バイオレーション'],
                  ['Win', 'Lose', 'Draw','バイオレーション','ファール！'],
                ];
    
    // 勝敗
    document.getElementById("result").textContent = result[user][pc];
    console.log(result[0][1]);

    // Winの際のデモ_一時削除
    // if(result[user][pc]=="Win"){ 
    //   $(".row1").fadeOut(3000);
    //   $(".result_1").fadeOut(3000);
    //   $(".Win_image").html('<img src="./image/final.jpg" alt="">');
    //   $(".Win_image").fadeOut(13000);
    //   $(".row1").fadein(3000);
    //   $(".result_1").fadein(3000);
    // }; 
    }
    
