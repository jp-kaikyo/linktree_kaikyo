///===================///
/// ==== CALCULE ==== ///
///===================///


//  ajouter abonner  //
let twitch = document.getElementById("twitch");
twitch_valeur = twitch.innerHTML = 40

let youtube_vod = document.getElementById("youtube_vod");
youtube_vod_valeur = youtube_vod.innerHTML = 1

let youtube_rediff = document.getElementById("youtube_rediff");
youtube_rediff_valeur = youtube_rediff.innerHTML = 35

let tiktok = document.getElementById("tiktok");
tiktok_valeur = tiktok.innerHTML = 227

let insta = document.getElementById("insta");
insta_valeur = insta.innerHTML = 336


//  adition + affichage  //
let total = document.getElementById("total")
total_valeur = total.innerHTML = twitch_valeur + youtube_vod_valeur + youtube_rediff_valeur + tiktok_valeur + insta_valeur


//  débogueur  //
console.log("[ CALCULE ABONNER ]")
console.log("twitch :", twitch_valeur)
console.log("youtube vod : ", youtube_vod_valeur)
console.log("youtube rediff", youtube_rediff_valeur)
console.log("tiktok :", tiktok_valeur)
console.log("insta :", insta_valeur)
console.log("total :", total_valeur)