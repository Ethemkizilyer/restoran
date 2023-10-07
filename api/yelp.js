import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer jVZsKnOEZp1keO2IfpTKGbV6n3B8VzSjFqwV1kzmy603u2f62bJQBsyXTKWdz1eldagsvO--Euv19zp8tNNMo2lq6D2EzgrxsyP-WPHoUksq0KWIyHwoP6MXapYgZXYx"
    }
})