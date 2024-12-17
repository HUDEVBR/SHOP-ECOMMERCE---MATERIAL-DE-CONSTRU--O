import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";
import { format, register } from "timeago.js"
const localeFunc = (number, index) => {
  // number: the timeago / timein number;
  // index: the index of array below;
  // totalSec: total seconds between date to be formatted and today's date;
  return [
    ['agora mesmo', 'agora'],
    ['há %s segundos', 'em %s segundos'],
    ['há um minuto', 'em um minuto'],
    ['há %s minutos', 'em %s minutos'],
    ['há uma hora', 'em uma hora'],
    ['há %s horas', 'em %s horas'],
    ['há um dia', 'em um dia'],
    ['há %s dias', 'em %s dias'],
    ['há uma semana', 'em uma semana'],
    ['há %s semanas', 'em %s semanas'],
    ['há um mês', 'em um mês'],
    ['há %s meses', 'em %s meses'],
    ['há um ano', 'em um ano'],
    ['há %s anos', 'em %s anos'],
  ][index];
};
// register your locale with timeago
register('pt_BR', localeFunc);

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
          
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              {/* <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
                /> */}
              <span className="widgetLgName">{order.userId}</span>
              </td>  
            <td className="widgetLgDate">{format(order.createdAt, 'pt_BR')}</td>
              <td className="widgetLgAmount">R$ {order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
