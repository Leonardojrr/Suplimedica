export const formatId = (id) => {
    let result = "";
    if (id.match(/[^A-Za-z0-9\-\.\s]/g)) {
        return null;
    }
    let plainId = id
        .toLowerCase()
        .replace(/[^A-Za-z0-9]/g, "")
        .toString();

    if (plainId.match(/[A-Za-z]/g)) {
        if (
            plainId.match(/[A-Za-z]/g).length != 1 ||
            !/^[A-Za-z]/.test(plainId)
        ) {
            return null;
        } else {
            result = handleId(plainId);
        }
    }
    return result;
};

const handleId = (str) => {
    let type = str.slice(0, 1);
    let number = str.slice(1);
    let finalNum = "";

    if (type != "j") {
        finalNum =
            " " +
            normalFormat(number.split("").reverse().join(""), 3)
                .reverse()
                .join(".");
    } else {
        finalNum = rifFormat(number);
    }

    let id = "";
    id += type.toUpperCase() + "-" + finalNum;

    return id;
};

const normalFormat = (s, i) => {
    let result = [];
    do {
        result.push(s.substring(0, i).split("").reverse().join(""));
    } while ((s = s.substring(i, s.length)) != "");

    return result;
};

const rifFormat = (s) => {
    var result = s.split("").reverse().join("");
    result = result.slice(0, 1) + "-" + result.slice(1);
    return result.split("").reverse().join("");
};
