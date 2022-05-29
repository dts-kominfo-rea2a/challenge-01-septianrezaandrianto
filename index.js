// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let convertBoolean=(props)=> {
    let answer
    if (props == true) {
        answer = "Yes"
    }
    else {
        answer = "No"
    }
    return answer
}

const favoriteColorFirstUser = [];
favoriteColorFirstUser.push("Yellow")
favoriteColorFirstUser.push("Pink")
favoriteColorFirstUser.push("White")
favoriteColorFirstUser.push("Purple")

const sdFirstUser = {
    name: "SD 01", 
    city: "Jakarta", 
    graduate: 2016
}

const smpFirstUser = {
    name: "SMP 02",
    city: "Jakarta",
    graduate: 2019
}

const smaFirstUser = {
    name: "SMA 03",
    city: "Tangerang"
}

const educationFirstUser = [];
educationFirstUser.push(sdFirstUser)
educationFirstUser.push(smpFirstUser)
educationFirstUser.push(smaFirstUser)

const restaurantSet = new Set()
restaurantSet.add("Bento")
restaurantSet.add("Sushi")
restaurantSet.add("Pancake")
restaurantSet.add("Eggy")
restaurantSet.add("Tempura")
restaurantSet.add("Bento")
restaurantSet.add("Eggy")
restaurantSet.add("Padang")
restaurantSet.add("Tteok")
restaurantSet.add("Sushi")
restaurantSet.add("Sushi")


const firstUser = {
    name : "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: favoriteColorFirstUser,
    isHavePet: convertBoolean(true),
    education: JSON.stringify(educationFirstUser),
    favoriterestaurant: restaurantSet,
};

const favoriteColorSecondUser = [];
favoriteColorSecondUser.push("Blue")
favoriteColorSecondUser.push("Black")
favoriteColorSecondUser.push("Grey")

const sdSecondsUser = {
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010
}

const smpSecondsUser = {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013
}

const smaSecondsUser = {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016	
}

const univSecondUser = {
    name: "Universitas Maju",
    city: "Tangerang"	
}

const educationSecondUser = [];
educationSecondUser.push(sdSecondsUser)
educationSecondUser.push(smpSecondsUser)
educationSecondUser.push(smaSecondsUser)
educationSecondUser.push(univSecondUser)

const restaurantSecondSet = new Set()
restaurantSecondSet.add("Tempura")
restaurantSecondSet.add("Bento")
restaurantSecondSet.add("Sushi")
restaurantSecondSet.add("Pancake")
restaurantSecondSet.add("Padang")
restaurantSecondSet.add("Katsu")
restaurantSecondSet.add("Geprek")
restaurantSecondSet.add("Pancake")
restaurantSecondSet.add("Eggy")

const secondUser = {
    name : "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: favoriteColorSecondUser,
    isHavePet: convertBoolean(false),
    education: JSON.stringify(educationSecondUser),
    favoriterestaurant: restaurantSet,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};