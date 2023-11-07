import {encodeloginRequest, decodeloginRequest} from "./proto/user"
import axios from "axios";

console.log("hello proto")


document.querySelector("#btn").addEventListener("click", async () => {
    const id = document.querySelector("#id").value;
    const pw = document.querySelector("#pw").value;
    const body = {id, pw}

    const encodeBodyData = encodeloginRequest(body)
    console.log(encodeBodyData)

    const dataRes = await sendData(encodeBodyData);
    console.log("data : " + dataRes)

    const decodedBodyData = decodeloginRequest(encodeBodyData)
    console.log(decodedBodyData)
})
document.querySelector("#chunkbtn").addEventListener("click", async () => {
    const id = document.querySelector("#id").value;
    const pw = document.querySelector("#pw").value;
    const body = {id, pw}

    const encodeBodyData = encodeloginRequest(body)
    console.log(encodeBodyData)

    const chunkRes = await sendChunkData(encodeBodyData);
    console.log("chunk : " + chunkRes)

    const decodedBodyData = decodeloginRequest(encodeBodyData)
    console.log(decodedBodyData)
})
const sendData = async (data) => {
    console.log(data)
    fetch("http://localhost:3000/proto/data", {
        method: "post",
        body:data,
        // body:encodeloginRequest(data),
        headers: {"Content-Type": "application/octet-stream"}

        // headers: {"Content-Type": "application/json"}
    })
    // const res = await axios({
    //     url: "http://localhost:3000/proto/data",
    //     method: "post",
    //     // data: body,
    //     data,
    //     headers: {"Content-Type": "application/octet-stream"}
    //     // headers: {"Content-Type": "application/json"}
    // })
    // return res.status
}
const sendChunkData = async (data) => {
    console.log(data)
    fetch("http://localhost:3000/proto/chunkdata", {
        method: "post",
        body:data,
        // body:encodeloginRequest(data),
        headers: {"Content-Type": "application/octet-stream"}

        // headers: {"Content-Type": "application/json"}
    })
}