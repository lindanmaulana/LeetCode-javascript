async function sleep(millis) {
    let res

    setTimeout(() => val = millis, millis)

    return res
}

const date = Date.now()
console.log(sleep(100).then(() => Date.now() - date))