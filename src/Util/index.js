import moment from "moment"

export const timeDiff = (time) => {
    return moment(time).fromNow()
}

export const dateFormatter = (dateTime) => {
    return moment(dateTime).format("D MMM")
}