const init = () => {
    clean(true)
    .then(data => {
        alert(data)
    })
    // cleanRoom
    //     .then((data) => {
    //         alert(data)
    //     })
    //     .catch((err) => {
    //         alert(arr);
    //     })
}

const clean = (isClean) =>{
    return new Promise((resolve, reject) => {
        if (isGarden){
            resolve("Good job......")
        }
        else{
            reject("You'r bed...!!!")
        }
    })
}




const cleanRoom = new Promise((resolve, reject) => {
    let isClean = false;
    if (isClean) {
        resolve("Good men the room is clean!!!")
    }
    else {
        reject("The room is not clean!, clean all the house!!");
    }
})

    init();