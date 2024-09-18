import axios from "axios";

export async function GetProductList() {

    let service = await axios
        .get(`https://5fc9346b2af77700165ae514.mockapi.io/products`, {
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json; charset=utf-8",
            }
        },
        )
        .then((response) => {
            return response.data;
        })
        .catch(function (error) {
            console.log("🚀 ~ file: GetProductList.js:24 ~ GetProductList ~ error:", error);
        });

    return service;
}