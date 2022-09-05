import moment from "moment"

export const timeDiff = (time) => {
    return moment(time).fromNow()
}

export const dateFormatter = (dateTime) => {
    return moment(dateTime).format("D MMM")
}

export const sortByDate = (a, b) => {
    if (a.date_added < b.date_added) {
        return 1
    }
    if (a.date_added > b.date_added) {
        return -1
    }
    return 0
}