import axios from "axios";

// const url = "mongodb+srv://kredfox4:Foxymeb4u!@cluster0.re6l3nv.mongodb.net/test";
const url = "http://localhost:5050/components/customers";

class CustotmerService {
    // get customer json data
    static getCustomers() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(customer => ({
                        ...customer,
                        createdAt: new Date(customer.createdAt)
                    }))
                )
            } catch (err) {
                reject(err)
            }
        })
    }
    // Create customer:
    static insertCustomer(text) {
        return axios.customer(url, {
            text
        })
    }

    // Delete cutomer
    static deleteCustomer(id) {
        return axios.delete(`${url}${id}`)
    }
}


export default CustotmerService;