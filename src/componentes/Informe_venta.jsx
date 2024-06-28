import logoempresa from "../img/logoempresa.png";
import { Button } from "@nextui-org/button";
import Avat from "../../components/Avatar";
import App from "../../components/TablaProductos/TabVenta";
import { Link } from "react-router-dom";

const Informe_venta = () => {
  return (
    <>
      <div className="nav">
        <img src={logoempresa} alt="Logo" className="navlg" />
        <Link to="/factura">
          <Button className="BtnN" color="success" variant="shadow">
            Factura
          </Button>
        </Link>
        <Link to="/inventario">
          <Button className="BtnN" color="success" variant="shadow">
            Inventario
          </Button>
        </Link>
        <Link to="/venta">
          <Button className="BtnN" color="success" variant="shadow">
            Registro Ventas
          </Button>
        </Link>
        <div className="Avat">
          <Avat />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="tAb">
        <App />
      </div>
    </>
  );
};

export default Informe_venta;