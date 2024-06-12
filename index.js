const products = [
    {
        "id": 1,
        "title": "Calabrese Broccoli",
        "img": "https://s3-alpha-sig.figma.com/img/f33f/1019/a5d402a28ba1071c21b355c7cf5ae3fd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pAKwmW4UQYqU0HONsFo-61Wbw1aOpASFOOSot9AVeEQGzokauOJb2pzYLIdR~qXuXLdhUb5Nh5CMHrPXiQBAtiRur9IZr7QcqIXu7sbEpjcN7ASmTMqNa8Ogm2VLzMmpPcL~80BBl9MIdBTP4Al3G8REWCWlRmch~NnROklNnri~CwGb-itSuSGlnDrSkpGbatT279dIUhCqAvGmPVaPT7vEFtQ8u3B3ET-38PJ3Jj1~9rwHHAl-im0Up-uy7bSGhjlq9laExc15Xp7HShO3xiW1U7dwge~8TDSHxUsTTuVeomnlbCaQtVu7NRBRCJk5BJ~A5v4Jn1AiBxwhA21y2A__",
        "price": 13.00
    },
    {
        "id": 2,
        "title": "Fresh Banana Fruites",
        "img": "https://s3-alpha-sig.figma.com/img/719c/74f1/8550a2d84c44045e60ddf9e956a02544?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N7lGZj2wDX6NicxGW6epLWnhlCcxP7Xr7JqJebRlzIVski5oJbESQs1-BnbX~HCnFNeCz7M1qG3kIRQ4zcY7nTZhQG20NiBcDqwS5YtmNySTM2gruls1Ebmuy303~DKmrtODt0Gy2hHW0rxaRCSk7rpQ2TlYL1H3iryM3dot1Si3LRF52hVTV6Wm1~yGHo6PolZJj9SVd3JP65qpYh8aC5iKaUwzfyR11gVcZyTtjOlstznoa373SpnQl16SHiShE3~yRE2NDfGDAA1u77JEP5aw8qcaRdZT2XDC5mg2VNdUmrUXaqZwHuDi6EzKBSxERaYmTFjVyKwcgZvMA5m6TA__",
        "price": 14.00
    },
    {
        "id": 3,
        "title": "White Nuts",
        "img": "https://s3-alpha-sig.figma.com/img/8762/9d56/a120924e74001a78cb084c4cb70830b6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aanZDfjuYm2HBibcxRolD2WtDfFhEkM2UChiwEQjxqQHKdm70bh5sZ~cGXp9htCsRjoY7P6O9GxDhzuRRWiWcaqIfWKjIatV-5b1n3IGWKoKTALTal27wy2MfYrS~~3q8Y-i8x29p5zBWPVZBUCyYtBIxq2A2-x65Bkb4zjq3Rz8LO3U8PhPIaRZmESWERLzHoVwuNEWfPvRHnttAUq5zkJfz8GoMkHaHGNeg-QaUCKa3x6t6CmFW~rHfXxfEjdm7jifojgBiR2JPUu16R-GQfcNYGRkAX-gFSVw5omyolq62Y0HqiSAdTUVt-y7HWO58U2OeX6ChcxYMNJGI6DLkQ__",
        "price": 14.00
    },
    {
        "id": 4,
        "title": "White Nuts",
        "img": "https://s3-alpha-sig.figma.com/img/8762/9d56/a120924e74001a78cb084c4cb70830b6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aanZDfjuYm2HBibcxRolD2WtDfFhEkM2UChiwEQjxqQHKdm70bh5sZ~cGXp9htCsRjoY7P6O9GxDhzuRRWiWcaqIfWKjIatV-5b1n3IGWKoKTALTal27wy2MfYrS~~3q8Y-i8x29p5zBWPVZBUCyYtBIxq2A2-x65Bkb4zjq3Rz8LO3U8PhPIaRZmESWERLzHoVwuNEWfPvRHnttAUq5zkJfz8GoMkHaHGNeg-QaUCKa3x6t6CmFW~rHfXxfEjdm7jifojgBiR2JPUu16R-GQfcNYGRkAX-gFSVw5omyolq62Y0HqiSAdTUVt-y7HWO58U2OeX6ChcxYMNJGI6DLkQ__",
        "price": 15.00
    },
    {
        "id": 5,
        "title": "Vegan Red Tomato",
        "img": "https://s3-alpha-sig.figma.com/img/5cd7/bd48/1b130d5852cf547b4c1b4be998f04467?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHNxVegTtGsQj-a6iSjneVRaO~ZQlWrYR~pvqHy6LIKjMr5S6kmoOT7dXgmBKjxuVBD9XgNMNOGG8~lEZVK1KI~FuVV9XE022rOsFxqQRdgfTJs0fruJFfLxf2Tw6T9V-3nC0i6RpxP07YoOBHIcVKrclhM79D~kUIfieBhCu8rM8MbxmFH4CA8v-c0JXIVtuBj~J-R0AA3S4~~P2N0lGjpyrZxirxhCxaLUt1eYefd8HXvmKn4-G-cDyBvB6Ruq-ezQTPVSUp0k3UwE1xy4OqbdmT9C2htovXFL5LsE5MzWyE3QrcY7Xt6Nhx-D7OxwQyzbvPSkEh0BtD78nETXxg__",
        "price": 17.00
    },
    {
        "id": 6,
        "title": "Mung Bean",
        "img": "https://s3-alpha-sig.figma.com/img/e804/30fe/92a219f3f2ec856cc1ded4a5d4f524e9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iT9effoT3mwqMIIANTAm-DN5TNCy96~oNMK4SOjug6zxhXkDz17BImIWNPnAw7E3VqjqkN8SYYCu8hp8WRrJhnOdoi40gEsQJ7qxRtEs6Un4q6fy~lmLAoERXIA24Y452iOTT7E-bBDH9JE~wVpbYlL4M9fiIpMAhwYMUo7~DH8HBfoDI0KnPQVOjpU3YxDMzh1JtE1lMBtrdMwi6sJMZ4UiUS5EQxMc1XyZupkgdSPQLoF0SCbZublobqakdC4HmQeF6lNK2Pn5gii-lCQYGc4tpe68XBI9TUIK0cta24FX4B3qXcfChddJRR58Goq4crSKZLnyXURkxqg6EbckVQ__",
        "price": 11.00
    }
]

let main = document.querySelector('.s-main')

console.log(products);


function htmlga() {
    let html = ``
    products.map((el) => {
        html += `
        <div class="card">
        <img src=${el.img} />
        <h3>${el.title}</h3>
        <b>${el.price}</b>
        </div>
        `

        main.innerHTML = html
    })
}


htmlga()