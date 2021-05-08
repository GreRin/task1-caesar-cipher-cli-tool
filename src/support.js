const validChain = ( object, ...keys ) =>  {
    return keys.reduce( ( a, b ) => ( a || { } )[ b ], object ) !== undefined;
}

const optionErrorMsg = (error) => {
    return `Option ${error} missed or was written incorrect!`
}

module.exports = {
    validChain: validChain,
    optionErrorMsg: optionErrorMsg
}
