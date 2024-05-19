import { useEffect, useState } from "react";
import "./widgetLg.css";
import { userRequest } from "../../requestMethods";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders")
        setOrders(res.data)
      } catch (error) {
        console.log(error)  
      }
    }
    getOrders();
  }, [])
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Últimas transações</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Usuários</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Quantidade</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map(order => ( 
          
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
              /> */}
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">02 Jun 2024</td>
          <td className="widgetLgAmount">R$ 122.00</td>
          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
