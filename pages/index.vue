<template>
    <div class="flex justify-around	flex-wrap">
        <CalendarFront
            v-for="(day, index) in testAlbums"
            :key="index"
            :day="index + 1"
            :album="day"
            class="w-96 h-96 mb-6"
        />
     </div>
</template>
<script setup lang="ts">

import { type Album } from '~/types/AlbumType';


const ellaAlbum: Album = {
    name: "Ella Wishes You A Swinging Christmas",
    artist: "Ella Fitzgerald",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2UhPCUgK2IGUrg7lIvMYfb?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1960,
};
const legendAlbum: Album = {
    name: "A Legendary Christmas",
    artist: "John Legend",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4rvtCloap7CfNl2Ogl8B87?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2018,
};
const peanutsAlbum: Album = {
    name: "A Charlie Brown Christmas",
    artist: "Vince Guaraldi Trio",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2XnNY3GEkbWHor5kyvXLu4?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
    year: 1965,
};
const sufJanAlbum: Album = {
    name: "Songs For Christmas",
    artist: "Sufjan Stevens",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2cuvGy1kWrtB3vX04Irpis?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2006
};
const philSpektorAlbum: Album = {
    name: "A Christmas Gift For You From Phil Spector",
    artist: "Phil Spector (compilation)",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2kzkwgOFAtRsDsas5Hi0Qu?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1963,
};
const bingCrosbyAlbum: Album = {
    name: "White Christmas",
    artist: "Bing Crosby",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/42KK3F8HTm1dyv5iFsCXdw?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1945,
};
const michaelBubleAlbum = {
    name: "Christmas is 4 Ever",
    artist: "Michael Buble",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7uVimUILdzSZG4KKKWToq0?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2012,
};
const jamesBrownAlbum = {
    name: "James Brown's Funky Christmas",
    artist: "James Brown",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5IEg0oP2tkX7XGOGXyB6wM?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1995,
};
const kaceyMusgravesAlbum = {
    name: "Kacey Musgrave's Christmas Album",
    artist: "Kacey Musgraves",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0KY2QQMpqsy1tOyNhr4zxI?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2019,
};
const elvisAlbum = {
    name: "Elvis' Christmas Album",
    artist: "Elvis",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6zk4RKl6JFlgLCV4Z7DQ7N?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1954,
};

const leslieOdomAlbum = {
    name: "Simply Christmas",
    artist: "Leslie Odom Jr.",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1ML2WOVB8xOW0QxVpyOPyi?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2016,
};
const chetAtkinsAlbum = {
    name: "Christmas With Chet Atkins",
    artist: "Chet Atkins",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1gBNqRTkKueSXnU7FJwezN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1961,
};
const natKingColeAlbum = {
    name: "The Christmas Song",
    artist: "Nat King Cole",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6vBGI5522jvPi0ZZuGQNp4?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1962,
};
const beachBoysAlbum = {
    name: "The Beach Boys' Christmas Album",
    artist: "The Beach Boys",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/67nqYhvjDyJXGD64937Lw3?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
    year: 1964,
};
const jacobMillerAlbum = {
    name: "Natty Christmas",
    artist: "Jacob Miller",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6XcMMSTEVs1vACIjK7OrnY?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
    year: 2015,
};
const darylHallJohnOatesAlbum = {
    name: "Home For Christmas",
    artist: "Daryl Hall & John Oates",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2zctWsSDRj6fZgQnxr9ktX?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
    year: 2006,
};
const stevieWonderAlbum = {
    name: "Someday at Christmas",
    artist: "Stevie Wonder",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/02NYB7JtjRJV7FWsl4Cdar?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1967,
};
const frankSinatraAlbum = {
    name: "A Jolly Christmas from Frank Sinatra",
    artist: "Frank Sinatra",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0ny6mZMBrYSO0s8HAKbcVq?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1957,
};
const johnDenverMuppetsAlbum = {
    name: "A Christmas Together",
    artist: "John Denver and the Muppets",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6PHcSJ2860KNPMhguTlqaW?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1979,
};
const sharonJonesAlbum = {
    name: "It's a Holiday Soul Party",
    artist: "Sharon Jones & The Dap-Kings",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/206CtiH7Yc0YfOtW2UtP7T?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2015,
};
const transSiberianOrchestraAlbum = {
    name: "Christmas Eve and Other Stories",
    artist: "Trans-Siberian Orchestra",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6QNuH4X7k9Fxsk3lRLOaiT?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1996,
};
const mannheimSteamrollerAlbum = {
    name: "A Fresh Aire Christmas",
    artist: "Mannheim Steamroller",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2B78GbmaHY5OZWLPddd437?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1988,
};
const daveBrubeckAlbum = {
    name: "A Dave Brubeck Christmas",
    artist: "Dave Brubeck",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/13Xwxp8icIpeRQhwdN7crn?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 1996,
};
const holidaysRuleAlbum = {
    name: "Holidays Rule",
    artist: "Various Artists",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6WYKqCoezPOWXD9UxbXyGZ?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2012,
};
const berlinerPhilharmonikerAlbum = {
    name: "Tchaikovsky: The Nutcracker",
    artist: "Berliner Philharmoniker",
    embedHtml: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/54Awn36ryf55PkZyOR4iwQ?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2010,
};

const testAlbums: Album[] = [
    ellaAlbum,
    legendAlbum,
    peanutsAlbum,
    sufJanAlbum,
    philSpektorAlbum,
    bingCrosbyAlbum,
    michaelBubleAlbum,
    jamesBrownAlbum,
    kaceyMusgravesAlbum,
    elvisAlbum,
    leslieOdomAlbum,
    holidaysRuleAlbum,
    chetAtkinsAlbum,
    natKingColeAlbum,
    beachBoysAlbum,
    jacobMillerAlbum,
    darylHallJohnOatesAlbum,
    stevieWonderAlbum,
    frankSinatraAlbum,
    johnDenverMuppetsAlbum,
    sharonJonesAlbum,
    transSiberianOrchestraAlbum,
    mannheimSteamrollerAlbum,
    daveBrubeckAlbum,
    berlinerPhilharmonikerAlbum,
];

</script>