import axios from "axios";
import Global from "../Global";

export default class ServicesEmpleados {
    getEmpleados() {
        return new Promise((resolve) => {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados";
            console.log("URL: "+url);
            console.log(url + request)
            axios.get(url + request).then(response => {
                console.log("Leyendo Empleados");
                resolve(response.data);
            });
        });
    }
}