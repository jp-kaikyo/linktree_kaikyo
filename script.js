///===================///
/// ==== CALCULE ==== ///
///===================///


//  ajouter abonner  //
let twitch = document.getElementById("twitch");
let twitch_valeur = twitch.innerHTML = 44

let youtube_vod = document.getElementById("youtube_vod");
let youtube_vod_valeur = youtube_vod.innerHTML = 3

let youtube_rediff = document.getElementById("youtube_rediff");
let youtube_rediff_valeur = youtube_rediff.innerHTML = 45

let tiktok = document.getElementById("tiktok");
let tiktok_valeur = tiktok.innerHTML = 228

let insta = document.getElementById("insta");
let insta_valeur = insta.innerHTML = 336


//  adition + affichage  //
let total = document.getElementById("total")
total.innerHTML = twitch_valeur + youtube_vod_valeur + youtube_rediff_valeur + tiktok_valeur + insta_valeur


//  débogueur  //
console.log("[ CALCULE ABONNER ]")
console.log("twitch :", twitch_valeur)
console.log("youtube vod : ", youtube_vod_valeur)
console.log("youtube rediff", youtube_rediff_valeur)
console.log("tiktok :", tiktok_valeur)
console.log("insta :", insta_valeur)
console.log("total :", total)