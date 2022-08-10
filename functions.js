function capitalize(x) {
    let updated = x.charAt(0).toUpperCase()
    updated.append(x.charAt(x[1-x.length]))
}

module.exports = capitalize